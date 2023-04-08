import { Component, OnInit } from '@angular/core';
import { Client, ClientDto } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

declare var window: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
 
loading:boolean =false
 

  clients: Client[] = [];
  clientsDto: ClientDto[] = [];

  deleteModal: any;
  idTodelete: string = '';


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );


    
    this.clientService.get().subscribe((data: ClientDto[]) => {
      this.clients = data;
      this.clientsDto = this.inintProductDto(this.clients);
      console.log(this.clients);
    });


    this.get();


  }



  get() {
    this.loading=true;

    this.clientService.get().subscribe((data) => {
      this.clients = data;
      this.loading=false;

    });
  }


  inintProductDto(clients: Client[]): ClientDto[] {
    
    let tempClientDto: ClientDto[] = [];

    clients.forEach((client) => {

      const restDto: ClientDto = {
        id: client.id,
        name: client.name,
        phone: client.phone,
        address: client.address,
        email: client.email,
       
      };

      tempClientDto.push(restDto);

    });

    return tempClientDto;
  }

  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }


/************JN:FIXING DELETE PROBLEM*********************/
  delete() {
    this.clientService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.clients = this.clients.filter(_ =>_.id !=  this.idTodelete);
        this.clientsDto = this.inintProductDto(this.clients);
        this.deleteModal.hide();
      }
    });
  }



}
