import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { DataUtils, FileLoadError } from 'src/app/services/data-util.service';
import { EventManager } from 'src/app/services/event-manager.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  formGroup!: FormGroup;
 
  productForm: Product = {

    id: '',
    name: '',
    price: 0,
    photo: null,
    photoContentType: '',
    description: '',
    tax: 0,
    inStock:0,

  };

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    protected elementRef: ElementRef,
    private productService: ProductService,
  ) {

    this.formGroup = this.fb.group({
      id:'',
      name: '',
      price: 0,
      photo: null,
      photoContentType: null,
      description: '',
      tax: 17,
      inStock:0,

    });

    
   

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
        console.log( "this.productForm" , this.productForm);
  //----JN It is very important to convert product(object) to form group --------//
        this.formGroup.patchValue({
        id: this.productForm.id,
        name: this.productForm.name,
        price: this.productForm.price,
        photo:this.productForm.photo,
        description: this.productForm.description,
        tax:this.productForm.tax,
        inStock: this.productForm.inStock});

    });
   
   
  }



  update() {
    this.productService.update(this.formGroup.value)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/product/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  //--------------JN ADD MAIN PHOTO STARTS--------//




  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }



  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.formGroup, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast('big error'),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.formGroup.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }



  //--------------JN ADD MAIN PHOTO ENDS--------//




}


