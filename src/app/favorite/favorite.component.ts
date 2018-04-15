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
  
  @Input('is-favorite') isSelected : boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  onClick() { 
    this.isSelected = !this.isSelected;
    this.click.emit({newValue : this.isSelected});   // We are using interace for  type-anotation. Interface is on top.
  }

}
