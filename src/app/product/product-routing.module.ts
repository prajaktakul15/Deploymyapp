import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'Add',component:ProductFormComponent},
  {path:'Update/:id',component:ProductFormComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
