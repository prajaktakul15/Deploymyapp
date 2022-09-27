import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageRange, passwordMatcher } from '../../myValidators/myvalidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*
      To create a Reactive Form using built-in service and its method 
      instead using the Class Name.

      FormBuilder is Service of Anuglar which help to create a Reactive form 

      Following Methods are also use 
      1.control() --> create a object FormContorl class
      2.group() --> create a object FormGroup class
      3.array() --> create a object FormArray class
  */ 
  regform = new FormGroup({
    name:this.fb.control("",Validators.required),
    age:this.fb.control("",[Validators.required,ageRange]),
    username:this.fb.control("",[Validators.required,Validators.pattern("^[a-z]{3,8}$")]),
    password:this.fb.control("",Validators.required),
    cpassword:this.fb.control("",Validators.required),
    mobile:this.fb.array([this.fb.control(""),this.fb.control(""),]),
  },[passwordMatcher('password','cpassword')])
  

  // getters for each control because we cant access them directly.
  get name():FormControl{
    return this.regform.get('name') as FormControl
  }
  get age():FormControl{
    return this.regform.get('age') as FormControl
  }
  get username():FormControl{
    return this.regform.get('username') as FormControl
  }
  get password():FormControl{
    return this.regform.get('password') as FormControl
  }
  get cpassword():FormControl{
    return this.regform.get('cpassword') as FormControl
  }
  get mobile():FormArray{
    return this.regform.get('mobile') as FormArray
  }
onSubmit(){
  console.log(this.regform.value)
}
addMobile(){
  this.mobile.push(this.fb.control(""))
}
removeMobile(){
  this.mobile.removeAt(this.mobile.length-1)  
}

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
