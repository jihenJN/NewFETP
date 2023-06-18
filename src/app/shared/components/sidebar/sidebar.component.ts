import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit { 

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

   constructor(
    private accountService :AccountService) {}

  ngOnInit(): void {
    this.getUserAccount();
    this.isAdmin();
    }

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
