export class Invoice {
  code: string;
  remarks:string;
  discount: number;
  tax: number;
  date: Date;
  total: number;
  stamp: number;
  client: number;



  constructor() {
    this.code = '';
    this.remarks = '';
    this.discount = 0;
    this.tax = 0;
    this.date = new Date;
    this.total = 0;
    this.stamp = 0;
    this.client = 0;

  }
}

export interface InvoiceDto {

  code: string;
  remarks:string;
  discount: number;
  tax: number;
  date: Date;
  total: number;
  stamp: number;
  client: number;


}