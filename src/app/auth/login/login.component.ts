import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    formLogin: any = {
    username: null,
    password: null
  };
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  errorMessage2 = '';
  roles: string[] = [];



  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService) { }
  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }
  
  }
    //login form
  ngOnInit(): void {
    //login form
   //Add User form validations

    this.formLogin = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
  }



  onSubmitLogin(): void {
        const { username, password } = this.formLogin;
        console.log("test");
    
        this.authService.login(username, password).subscribe({
          next: data => {
            console.log("data : ", data);
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
    
            console.log("Roles : ", this.roles);
            console.log("user : ", this.tokenStorage.getUser());
            this.router.navigate(['product/home']);
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        });
      }

      reloadPage(): void {
        window.location.reload();
      }
}
