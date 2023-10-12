import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceDto } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { Table } from 'primeng/table';
import { ClientService } from 'src/app/services/client.service';

declare var window: any;

@Component({
  selector: 'app-table-invoice',
  templateUrl: './table-invoice.component.html',
  styleUrls: ['./table-invoice.component.css'],
})
export class TableInvoiceComponent implements OnInit {
  loading: boolean = false;

  status = 'DRAFT';
  statuses!: any[];
  representatives!: any[];

  invoices: Invoice[] = [];
  invoicesDto: InvoiceDto[] = [];

  deleteModal: any;
  idTodelete: string = '';

  currentUser: User = {
    id: '',
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    activated: false,
    langKey: '',
    authorities: [],
    createdBy: '',
    createdDate: new Date(),
    lastModifiedBy: '',
    lastModifiedDate: new Date(),
  };

  constructor(
    private invoiceService: InvoiceService,
    private accountService: AccountService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.statuses = [
      { label: 'SENT', value: 'SENT' },
      { label: 'RECEIVED', value: 'RECEIVED' },
      { label: 'PAID', value: 'PAID' },
      { label: 'OVERDUE', value: 'OVERDUE' },
      { label: 'DRAFT', value: 'DRAFT' },
    ];

    this.representatives = [
      { name: 'kiko', image: 'amyelsner.png' },
      { name: 'carrefour', image: 'annafali.png' },
      { name: 'ELECTO', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.getClients();
    this.getUserAccount();
    this.isAdmin();

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.invoiceService.get().subscribe((data: InvoiceDto[]) => {
      this.invoices = data;
      this.invoicesDto = this.inintProductDto(this.invoices);
      console.log(this.invoices);
    });

    this.get();
  }

  get() {
    this.loading = true;
    this.invoiceService.get().subscribe((data) => {
      this.invoices = data;
      this.loading = false;
    });
  }

  getClients() {
    this.clientService.get().subscribe((res) => {
      this.representatives = res;
    });
  }

  inintProductDto(invoices: Invoice[]): InvoiceDto[] {
    let tempProductDto: InvoiceDto[] = [];

    invoices.forEach((invoice) => {
      const restDto: InvoiceDto = {
        id: invoice.id,
        code: invoice.code,
        remarks: invoice.remarks,
        discount: invoice.discount,
        tax: invoice.tax,
        date: invoice.date,
        total: invoice.total,
        status: invoice.status,
        client: this.getClient(invoice.client?.name),
      };

      tempProductDto.push(restDto);
    });

    return tempProductDto;
  }

  private getClient(data: any): any {
    console.log('data in getRestaurant----------' + data);
    return data;
  }

  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.invoiceService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.invoices = this.invoices.filter((_) => _.id != this.idTodelete);
        this.invoicesDto = this.inintProductDto(this.invoices);
        this.deleteModal.hide();
      },
    });
  }

  //*****************JN:METHOD TO STYLE STATUS****************************** */

  getStatusClass(status: string): string {
    switch (status) {
      case 'PAID':
        return 'badge badge-success';
      case 'OVERDUE':
        return 'badge badge-danger';
      case 'SENT':
      case 'RECEIVED':
        return 'badge badge-info';
      default:
        return 'badge badge-warning';
    }
  }

  /*****************JN: adding gestion des roles************************************** */

  getUserAccount(): void {
    this.accountService.getAccount().subscribe({
      next: (response: User) => {
        this.currentUser = response;
        console.log(this.currentUser);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  isAdmin(): boolean | undefined {
    console.log(this.currentUser.authorities?.includes('ROLE_ADMIN'));
    return this.currentUser.authorities?.includes('ROLE_ADMIN');
  }

  clear(table: Table) {
    table.clear();
  }

  dt: Table | undefined;
  getEventValue($event: any): string {
    return $event.target.value;
  }
}
