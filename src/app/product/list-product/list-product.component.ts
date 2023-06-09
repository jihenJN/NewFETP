import { Component, OnInit } from '@angular/core';
import { Product, ProductDto } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';

declare var window: any;
@Component({
  selector: 'app-list-product',
  template: `
  <div class="invoice-status">
    <span [ngClass]="getStatusClass(invoice.status)">{{ invoice.status }}</span>
  </div>
`,

  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],

})

export class ListProductComponent implements OnInit {
  loading: boolean = false

  products: Product[] = [];
  productsDto: ProductDto[] = [];

  currentUser:User={
    id :'',
    login : '',
    firstName : '',
    lastName :'',
    email:'',
    activated: false,
    langKey: '',
    authorities: [],
    createdBy: '',
    createdDate: new Date,
    lastModifiedBy: '',
    lastModifiedDate: new Date,
      
   };





  deleteModal: any;
  idTodelete: string = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [5, 10, 15, 20];
  searchText: any;

  constructor(private productService: ProductService,private accountService :AccountService) { }

  ngOnInit(): void {
    
    this.getUserAccount();
    this.isAdmin();

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.productList();


    this.productService.get().subscribe((data: ProductDto[]) => {
      this.products = data;
      this.productsDto = this.inintProductDto(this.products);
      console.log(this.products);
    });


    this.get();

  }

  //pagination 
  productList(): void {
    this.productService.get().subscribe((response) => {
      this.productsDto = response;
      this.productsDto = this.inintProductDto(this.products);
      console.log(this.productsDto);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.productList();
  }

  onTableSizeChange(evnet: any): void {
    this.tableSize = evnet.target.value;
    this.page = 1;
    this.productList();
  }

  //end pagination

  get() {
    this.loading = true;
    this.productService.get().subscribe((data) => {
      this.products = data;
      this.loading = false;

    });
  }


  inintProductDto(products: Product[]): ProductDto[] {
    let tempProductDto: ProductDto[] = [];

    products.forEach((product) => {

      const restDto: ProductDto = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        tax: product.tax,
        photo: this.getPhoto(product.photo),
        inStock: product.inStock
      };

      tempProductDto.push(restDto);

    });

    return tempProductDto;
  }

  private getPhoto(data: string): any {
    return 'data:image/jpg;base64,' + data;
  }

  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.productService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.products = this.products.filter(_ => _.id != this.idTodelete);
        this.productsDto = this.inintProductDto(this.products);
        this.deleteModal.hide();
      }
    });
  }

  /*****************JN: adding gestion des roles************************************** */
  

  getUserAccount() {
    this.accountService.getAccount().subscribe(
      (response) => {
        this.currentUser = response;
      
        console.log("this.currentUser++++"+this.currentUser);
      },
      (error: any) => {
        // Handle the error here
        console.error(error);
      }
    );
  }

  isAdmin(): boolean|undefined {
    console.log(this.currentUser.authorities?.includes('ROLE_ADMIN'))
    return  this.currentUser.authorities?.includes('ROLE_ADMIN');
  }


  

}



