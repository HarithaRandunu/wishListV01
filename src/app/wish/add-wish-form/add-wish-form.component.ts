import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();

  constructor() { }

  OnInit(): void {

  }

  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));    //this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
