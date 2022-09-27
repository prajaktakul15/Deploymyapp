import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/myservices/product.service';
import { Product } from 'src/app/product.model';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


    product: Product = new Product()
 
    onSubmit(){
        console.log(this.product)
        this.pservice.saveProduct(this.product)
        alert("Product Save")
        this.router.navigate(['/product','list'])
    }

    constructor(private route:ActivatedRoute,private pservice:ProductService,private router :Router) { }

  ngOnInit(): void {


    let id:number =eval(this.route.snapshot.paramMap.get('id')!)
    if(id){

    
    this.product= this.pservice.getProductById(id)!
  }
}

}
