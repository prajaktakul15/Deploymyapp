import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TitleComponent } from './title/title.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainModule } from './main/main.module';

const routes: Routes =[
  {path: '',redirectTo:'/home',pathMatch:"full"},
  {path:"product",loadChildren:()=>import   ('./product/product.module').then(m=>m.ProductModule)},
  {path:"User",loadChildren:()=>import   ('./user/user.module').then(m=>m.UserModule)},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitleComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }