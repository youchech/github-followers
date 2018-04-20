import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {


  @Input('is-fav') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  myFavorite() {
    this.isFavorite = !this.isFavorite;
    //this.click.emit(this.isFavorite);
    this.click.emit({newState: this.isFavorite});
  }

}
