import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface favchangedEventArgs{
  newValue : boolean;
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})


export class FavoriteComponent implements OnInit {
  
  @Input('is-liked') isSelected : boolean ;
  @Input('count-likes') countLikes : number ;
  // @Input() x : any ;
  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  onClick() { 
    this.isSelected = !this.isSelected;
    this.countLikes = !this.countLikes ? 1 : 0;
    //console.log(this.countLikes);
    this.click.emit({newValue : this.isSelected});   // We are using interace for  type-anotation. Interface is on top.
  }

}
