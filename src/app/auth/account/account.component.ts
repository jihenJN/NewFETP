import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  currentUser: any;
  

  constructor(private token: TokenStorageService  ) { 
    
    console.log("**************this.token********",this.token)
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log("**************this.token********",this.token)
    
  }

}



