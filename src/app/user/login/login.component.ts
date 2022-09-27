import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
  {
 /*
  username:FormControl = new FormControl("Prajakta",Validators.required)
  onSubmit()
  {
    console.log(this.username.value)
  }
  */
 loginform:FormGroup = new FormGroup({
  username:new FormControl("",[Validators.required,Validators.pattern("[a-z]{3,8}")]),
  Password:new FormControl("",Validators.required),
 })
  get username():FormControl{
    return this.loginform.get('username') as FormControl
  }

  get password():FormControl{
    return this.loginform.get('password') as FormControl
  }

  onSubmit()
  {
    console.log(this.loginform.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
