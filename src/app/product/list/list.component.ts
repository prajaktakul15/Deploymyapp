import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/myservices/product.service';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  menutitle:string="Product List"

  searchname:string="Samsung Mobile"

  search(event:Event)
  {
    //alert(event)
    //alert(event.target)
    let element:HTMLInputElement=event.target as HTMLInputElement
    this.searchname = element.value
    console.log(this.searchname)
  }
   _searchname2:string="Sony Mobile"
    set searchname2(value:string){
      this._searchname2=value
      this.productlist=this.backuplist.filter(product=>product.product_Name.toLowerCase().startsWith(value.toLowerCase()))

    }

    get searchname2():string{
      return this._searchname2
    }

     productlist!:Product[]
  
     backuplist:Product[]=this.productlist

     filterbytype(type?:string)
       {
        if(type)
        {
          this.productlist=this.backuplist.filter(p=>p.product_Type==type)
        }

       
       else
       {
        this.productlist=this.backuplist
       }
      
      }

      cssClass={
        'fst-italic':true,
        'text-primary':false,
        'text-center':true,
        'text-brown':true
      }
      //CSS property binding
      cssProperties={
        'border':'2px solid black',
        'padding-bottom':"10px"
      }

      show(rating:number)
      {
        console.log("star Rating is",rating)
      }


     constructor(private pservice:ProductService) { }

  ngOnInit(): void {
    this.productlist=this.pservice.getlist()
    this.backuplist=this.productlist
    
  }

  delete(id:number){

    this.pservice.deleteProduct(id)
  }

}
