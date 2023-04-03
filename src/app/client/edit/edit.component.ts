import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  clientForm: Client = {
    id: '',
    name: '',
    phone: 0,
    address: '',
    email: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    this.clientService.getById(id).subscribe((data) => {
      this.clientForm = data;
    });
  }

  update() {
    this.clientService.update(this.clientForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/listClient"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
