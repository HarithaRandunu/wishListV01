import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishService } from './wish.service';

import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    
    MatIconModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconButton,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
