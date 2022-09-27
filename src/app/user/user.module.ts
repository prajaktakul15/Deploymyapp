import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';


const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule { }
