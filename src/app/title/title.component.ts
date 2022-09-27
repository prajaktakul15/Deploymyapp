import { Component } from "@angular/core";
@Component ( {
    selector:'<app-title>',
    template:'<h1 title="Hii Welcome" (click)=show(12)>{{title}}</h1>',
    styles:['h1{color:skyblue;font-style:italic;}']
})
export class TitleComponent
{
title:string="My-Store"

show(n:number)
{
    alert("Name: "+n)
}
}
