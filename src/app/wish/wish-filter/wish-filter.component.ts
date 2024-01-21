import { Component, OnInit, Input, Output, EventEmitter, TrackByFunction } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { MatSelectModule } from '@angular/material/select';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete,
  (item: WishItem) => !item.isComplete
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent implements OnInit {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  trackByFn: TrackByFunction<{ name: string; value: string; }> | undefined;

  constructor() { }

  listFilter: any = '0';

  ngOnInit(): void {
    this.updateFilter('0'); //or you can code this as "this.changeFilter('0');"
  }

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(filters[value]);
  }



  states = [
    { name: 'All', value: "0" },
    { name: 'Fulfilled', value: "1" },
    { name: 'Unfulfilled', value: "2" }
  ];


}
