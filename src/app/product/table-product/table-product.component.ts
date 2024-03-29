import { Component, OnInit } from '@angular/core';
import { Product, ProductDto } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Table } from 'primeng/table';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
declare var window: any;


@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})

export class TableProductComponent  implements OnInit {
  loading: boolean = false

  products: Product[] = [];
  productsDto: ProductDto[] = [];
  
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
    createdDate: new Date,
    lastModifiedBy: '',
    lastModifiedDate: new Date,

  };

  constructor(private productService: ProductService,private accountService :AccountService) { }

    ngOnInit(): void {

     
      this.getUserAccount();
      this.isAdmin();
      
      this.productService.get().subscribe((data: ProductDto[]) => {
        this.products = data;
        this.productsDto = this.inintProductDto(this.products);
      
        console.log(this.products);
      });
    
  
      this.get();

      this.deleteModal = new window.bootstrap.Modal(
        document.getElementById('deleteModal')
      );
      
  }


  get() {
    this.loading=true;
   
    this.productService.get().subscribe((data) => {
      this.products = data;
      this.loading=false;
     
   
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
        inStock: product.inStock,
        
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




  getSeverity(status: number) {
   if(status==0)
   return 'danger'
   else if (status > 0 && status <200)
   return 'warning'
   else
   return 'sucess'
}

/*****************JN: adding gestion des roles************************************** */

getUserAccount() {
  this.accountService.getAccount().subscribe(
    (response) => {
      this.currentUser = response;
    
      console.log(this.currentUser);
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





clear(table: Table) {
  table.clear();
}


dt: Table | undefined;
getEventValue($event:any) :string {
  return $event.target.value;
} 
   
  
}
