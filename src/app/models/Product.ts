
export class Product {

  id: string;
  name: string;
  price: number;
  photo: any;
  photoContentType?: string | null;
  description: string;
  tax: number;
  inStock: number;

  
  constructor() {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.photo = '';
    this.photoContentType='';
    this.description = '';
    this.tax = 0;
    this.inStock= 0;

  }
}

export interface ProductDto {
  id: string;
  name: string;
  price: number;
  photo: any;
  photoContentType?: string | null;
  description: string;
  tax: number;
  inStock: number;
}