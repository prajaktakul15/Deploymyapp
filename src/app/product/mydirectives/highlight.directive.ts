import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 
  
  @Input()appHighlight!:string
  @Input()fontsize!:string

  constructor(private element:ElementRef)
   { 
   }
   @HostListener("mouseover")
    onMmouseOver()
    {
      this.element.nativeElement.style.backgroundColor=this.appHighlight
      this.element.nativeElement.style.fontSize=this.fontsize
    }
    @HostListener("mouseleave")
    onmouseLeave()
    {
      this.element.nativeElement.style.backgroundColor="white"
      this.element.nativeElement.style.fontSize="16px"
    }
    }
    
  


function Hotlistener(arg0: string) {
  throw new Error('Function not implemented.');
}

