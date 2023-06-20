import { Component, OnInit } from '@angular/core';
import { Client, ClientDto } from 'src/app/models/Client';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

declare var window: any;

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})


export class ListClientComponent  implements OnInit{
 
  loading:boolean =false
   
  
    clients: Client[] = [];
    clientsDto: ClientDto[] = [];
  
    deleteModal: any;
    idTodelete: string = '';

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
  
  
    constructor(private clientService: ClientService, private accountService :AccountService) { }
  
    ngOnInit(): void {

      this.getUserAccount();
      this.isAdmin();
  
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




  }
  
