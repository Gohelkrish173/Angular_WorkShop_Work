import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _router:Router){
  }
  errMsg = "";
  loginForm:FormGroup = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl('')
  });

  login(){
    if(this.loginForm.value.UserName=="arjun" && this.loginForm.value.Password=="bala"){
      localStorage.setItem('user',JSON.stringify(this.loginForm.value))
      this._router.navigate(['/']);
    }
    else{
      this.errMsg = "Username/password does not match";
    }

  }
}
