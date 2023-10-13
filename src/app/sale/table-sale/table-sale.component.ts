import { Component, OnInit } from '@angular/core';
import { Sale, SaleDto } from 'src/app/models/Sale';
import { SaleService } from 'src/app/services/sale.service';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table-sale',
  templateUrl: './table-sale.component.html',
  styleUrls: ['./table-sale.component.css'],
})
export class TableSaleComponent implements OnInit {
  loading: boolean = false;

  sales: Sale[] = [];
  salesDto: SaleDto[] = [];
  representatives!: any[];

  constructor(
    private saleService: SaleService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.get();
    this.getProducts();

    this.saleService.get().subscribe((data: SaleDto[]) => {
      this.sales = data;
      this.salesDto = this.inintSaleDto(this.sales);
      console.log(this.sales);
    });
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
        product: this.getProduct(sale.product),
        invoice: sale.invoice,
      };

      tempSaleDto.push(restDto);
    });

    return tempSaleDto;
  }

  getProducts() {
    this.productService.get().subscribe((res) => {
      this.representatives = res;
    });
  }

  private getProduct(data: any): any {
    console.log('data in  getProduct----------' + data);
    return data;
  }

  /************JN:PrimeNG table part*********************/
  clear(table: Table) {
    table.clear();
  }

  dt: Table | undefined;
  getEventValue($event: any): string {
    return $event.target.value;
  }
}
