import { Component, OnInit } from '@angular/core';
import { Sale, SaleDto } from 'src/app/models/Sale';
import { SaleService } from 'src/app/services/sale.service';

declare var window: any;

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})




export class ListSaleComponent implements OnInit {

  loading: boolean = false


  sales: Sale[] = [];
  salesDto: SaleDto[] = [];

  deleteModal: any;
  idTodelete: string = '';


  constructor(private saleService: SaleService) { }

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );



    this.saleService.get().subscribe((data: SaleDto[]) => {
      this.sales = data;
      this.salesDto = this.inintSaleDto(this.sales);
      console.log(this.sales);
    });


    this.get();


  }



  get() {
    this.loading = true;

    this.saleService.get().subscribe((data) => {
      this.sales = data;
      this.loading = false;

    });
  }


  inintSaleDto(sales: Sale[]): SaleDto[] {

    let tempSaleDto: SaleDto[] = [];

    sales.forEach((sale) => {

      const restDto: SaleDto = {
        id: sale.id,
        quantity: sale.quantity,
        price: sale.price,
        tax: sale.tax,
        discount: sale.discount,
        available: sale.available,
        product: sale.product,
        invoice: sale.invoice,

      };

      tempSaleDto.push(restDto);

    });

    return tempSaleDto;
  }

  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }


  /************JN:FIXING DELETE PROBLEM*********************/
  delete() {
    this.saleService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.sales = this.sales.filter(_ => _.id != this.idTodelete);
        this.salesDto = this.inintSaleDto(this.sales);
        this.deleteModal.hide();
      }
    });
  }



}
