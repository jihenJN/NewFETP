import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  currentUser: User = {
    id: '',
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    activated: false,
    langKey: '',
    authorities: [],
    createdBy: '',
    createdDate: new Date,
    lastModifiedBy: '',
    lastModifiedDate: new Date,

  };


  formLogin: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  errorMessage2 = '';
  roles: string[] = [];
  hide = true;
  isPasswordResetInitClicked = false;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private accountService: AccountService) {
    this.tokenStorage = tokenStorage;

  }

  //Form Validables 
  registerForm: any = FormGroup;
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
    if (this.submitted) {
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
    this.authService.login(username, password).subscribe({
      next: data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.getUserAccount();
        this.router.navigate(['/chart']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }





  getUserAccount(): void {
    this.accountService.getAccount().subscribe({
      next: (response: User) => {
        this.currentUser = response;
        console.log(this.currentUser);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  handleForgotPassword() {
    this.isPasswordResetInitClicked = true;
  }



  reloadPage(): void {
    window.location.reload();
  }
}

