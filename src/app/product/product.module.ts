import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { HighlightDirective } from './mydirectives/highlight.directive';
import { DiscountPipe } from './mypipes/discount.pipe';
import { ProductFormComponent } from './product-form/product-form.component';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    HighlightDirective,
    DiscountPipe,
    StarComponent,
    DetailComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
    ]
})
export class ProductModule { }
