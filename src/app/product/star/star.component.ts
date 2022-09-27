import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
   @Input()rating!:number
   @Output() printRating = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }



showRating(rating:number)
{
 this.printRating.emit(rating)
}

}


