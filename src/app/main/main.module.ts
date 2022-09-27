import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';



const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'About-us',component:AboutUsComponent},
]



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainModule { }
