import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../myservices/product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   id!:number
   product!:Product

  constructor(private route:ActivatedRoute,private pservice:ProductService){ }

  ngOnInit(): void {
     this.id=eval(this.route.snapshot.paramMap.get('id')!)
      this.product= this.pservice.getProductById(this.id)!
  
    }



}
