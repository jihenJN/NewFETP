import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';


declare var window: any;
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  loading: boolean = false
  users: User[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.get();


  }



  get() {
    this.loading = true;

    this.userService.get().subscribe((data) => {
     
      this.users = data;
      console.log("--------users---------",this.users)
      this.loading = false;

    });
  }

  setActive(user: User, isActivated: boolean): void {
    this.userService.update({ ...user, activated: isActivated }).subscribe((data) => {
     
     user = data;
     
     
    });
  }
   
  }

 
  


 


 




