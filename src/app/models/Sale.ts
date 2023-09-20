import { Invoice } from './Invoice';
import { Product } from './Product';

export class Sale {
  id: string;
  quantity: number;
  price: number;
  tax: number;
  discount: number;
  available: boolean;
  product?: Pick<Product, 'name' | 'price'> | null;
  invoice?: Pick<Invoice, 'code'> | null;

  constructor() {
    this.id = '';
    this.quantity = 0;
    this.price = 0;
    this.tax = 0;
    this.discount = 0;
    this.available = true;
    this.product = null;
    this.invoice = null;
  }
}

export interface SaleDto {
  id: string;
  quantity: number;
  price: number;
  tax: number;
  discount: number;
  available: boolean;
  product?: Pick<Product, 'name' | 'price'> | null;
  invoice?: Pick<Invoice, 'code'> | null;
}
