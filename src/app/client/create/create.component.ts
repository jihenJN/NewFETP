import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  clientForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router) {

    this.clientForm = this._formBuilder.group({
      name: '',
      phone: 0,
      address:'',
      email: '',
   
    });

  }

  ngOnInit() { }

  submit() {


    this.clientService.create(this.clientForm.value)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/client/home"])
          console.log("success .....");
        },
        error: (err) => {
          console.log(err);
        }
      })
  }



}
