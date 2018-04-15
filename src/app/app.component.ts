import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  post = {
    isFavorite : false,
  }
  // type anotation for compile time checking.
  // we can use inline anotation  (eventArgs:{neewValue : boolean}) 
  // or interface (it is in the component from where the event is raised and we import that)
  onFavoriteChange(favchangedEventArgs){
    console.log("Favorite Changed",favchangedEventArgs);
  }
}
