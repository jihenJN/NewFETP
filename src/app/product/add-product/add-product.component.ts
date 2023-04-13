
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUtils, FileLoadError } from 'src/app/services/data-util.service';
import { EventManager } from 'src/app/services/event-manager.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    private _formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {

    this.productForm = this._formBuilder.group({
      name: '',
      price: 0,
      photo: null,
      photoContentType: null,
      description: '',
      tax: 17,
      inStock: 0
    });

  }

  ngOnInit() { }

  submit() {


    this.productService.create(this.productForm.value)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/productList"])
          console.log("success .....");
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
    this.dataUtils.loadFileToForm(event, this.productForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast('big error'),
    });
  }



  //--------------JN ADD MAIN PHOTO ENDS--------//


}