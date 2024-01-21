import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent implements OnInit {
  @Input() wish! : WishItem; //non-known property

  constructor(private events: EventService) { }

  ngOnInit(): void {

  }

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted' ]: [];

    return {'strikeout text-muted': this.wish.isComplete};
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }
  
  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

}
