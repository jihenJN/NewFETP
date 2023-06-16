import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
//import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

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
  
/*
  constructor(private token: TokenStorageService  ) { 
    
    console.log("**************this.token********",this.token)
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log("**************this.token********",this.token)
    
  }*/

  constructor(private accountService :AccountService ) { }

  ngOnInit(): void {
    this.getUserAccount();
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
  


}



