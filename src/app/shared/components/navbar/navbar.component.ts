import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 /* private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;*/
  
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
    private accountService :AccountService,private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.getUserAccount();
  /*this.username = "jihen";
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("this.isLoggedIn "+this.isLoggedIn )

    if (this.isLoggedIn) {
    
     const user = this.tokenStorageService.getUser();
     this.roles = user.roles;
     this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
     this.username = user.username;

     
    }*/


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

  logout(): void {

    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }







}
