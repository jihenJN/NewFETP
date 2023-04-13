import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceDto } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { DatePipe } from '@angular/common';



declare var window: any;

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  
  styleUrls: ['./list-invoice.component.css'],
  providers: [DatePipe]
})


export class ListInvoiceComponent implements OnInit {

  loading:boolean =false
  
  status='DRAFT'

  invoices: Invoice[] = [];
  invoicesDto: InvoiceDto[] = [];

  deleteModal: any;
  idTodelete: string = '';


  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {

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
    this.loading=true;
    this.invoiceService.get().subscribe((data) => {
      this.invoices = data;
      this.loading=false;

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
        status:invoice.status,
        client: this.getClient(invoice.client?.name),
        
        //photo: this.getPhoto(invoice.photo),
      };

      tempProductDto.push(restDto);

    });

    return tempProductDto;
  }

  private getPhoto(data: string): any {
    return 'data:image/jpg;base64,' + data;
  }


  private getClient(data:any): any {
    console.log("data in getRestaurant----------" + data);
    return data;
  }




  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }


  delete() {
    this.invoiceService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.invoices = this.invoices.filter(_ =>_.id !=  this.idTodelete);
        this.invoicesDto = this.inintProductDto(this.invoices);
        this.deleteModal.hide();
      }
    });
  }

//*****************JN:METHOD TO SYLE STATUS****************************** */

  getStatusClass(status:string): string {
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

}
