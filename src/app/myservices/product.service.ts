import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productlist:Product[]=[
    {
        "product_Id":1,
        "product_Name":"Samsung Galaxy",
        "product_Price":20,
        "product_ImageURL":"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a235flbhins/gallery/in-galaxy-a23-sm-a235-sm-a235flbhins-531577286?$650_519_PNG$",
        "product_Type":"Mobile",
        "product_MDate":new Date(2019,5,15),
        "product_Discount":5,
        "product_Rating":2.2
    },
    {
        "product_Id":2,
        "product_Name":"Sony Xperia",
        "product_Price":20908,
        "product_ImageURL":"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a235flbhins/gallery/in-galaxy-a23-sm-a235-sm-a235flbhins-531577286?$650_519_PNG$",
        "product_Type":"Mobile",
        "product_MDate":new Date(2017,5,15),
        "product_Discount":4,
        "product_Rating":2.2
    },

      {
        "product_Id":3,
        "product_Name":"Sony Xperia",
        "product_Price":20908,
        "product_ImageURL":"https://cdn1.smartprix.com/rx-ixZe8j5oL-w1200-h1200/xZe8j5oL.jpg",
        "product_Type":"Tv",
        "product_MDate":new Date(2018,5,15),
        "product_Discount":8,
        "product_Rating":2.2
      },

      {
        "product_Id":4,
        "product_Name":"Apple Laptop",
        "product_Price":20908,
        "product_ImageURL":"https://cdn.pocket-lint.com/r/s/320x/assets/images/139487-laptops-review-macbook-pro-with-touch-bar-review-13-inch-a-pricey-power-boost-worth-having-image1-agmyhu7lkm.jpg?v1",
        "product_Type":"Laptop",
        "product_MDate":new Date(2022,5,15),
        "product_Discount":5,
        "product_Rating":4.5
      },

      {

        "product_Id":5,
        "product_Name":"Voltas AC",
        "product_Price":15000,
        "product_ImageURL":"https://m.media-amazon.com/images/I/51f0BkrwQPL._SL1500_.jpg",
        "product_Type":"AC",
        "product_MDate":new Date(2021,5,15),
        "product_Discount":5,
        "product_Rating":5.0
      },

      {
        "product_Id":6,
        "product_Name":"Whirlpool Refrigerator",
        "product_Price":54000,
        "product_ImageURL": "https://m.media-amazon.com/images/I/71esczZ2+xL._SL1500_.jpg",
        "product_Type":"Fridge",
        "product_MDate":new Date(2020,5,15),
        "product_Discount":5,
        "product_Rating":2.5
      }
    ]
  constructor() { 
      console.log("service constructor is invoke")
  }
      getlist(){
        return this.productlist
      }
      getProductById(id:number){
         return this.productlist.find(p=>p.product_Id==id)
      }

      saveProduct(product:Product){
        let p= this.getProductById(product.product_Id);
        if (p==undefined)
        {
        this.productlist.push(product)
        }
      
      else
      {
          let i = this.productlist.indexOf(p)
          this.productlist.splice(i,1,product)
      }
      }

      deleteProduct(id:number)
      {
         let p:Product =this.getProductById(id)!
         let i= this.productlist.indexOf(p)
         this.productlist.splice(i,1);
      }
}

