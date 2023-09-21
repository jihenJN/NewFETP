import { Client } from './Client';
import { Sale } from './Sale';

export class Invoice {
  id: string;
  code: string;
  remarks: string;
  discount: number;
  tax: number;
  date: Date;
  total: number;
  status: string;
  client?: Pick<Client, 'name' | 'phone'> | null;
  sales?: Sale[];

  constructor() {
    this.id = '';
    this.code = '';
    this.remarks = '';
    this.discount = 0;
    this.tax = 0;
    this.date = new Date();
    this.total = 0;
    this.status = 'DRAFT';
    this.client = null;
  }
}

export interface InvoiceDto {
  id: string;
  code: string;
  remarks: string;
  discount: number;
  tax: number;
  date: Date;
  total: number;
  status: string;
  client?: Pick<Client, 'name' | 'phone'> | null;
  sales?: Sale[];
}
