import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopCardComponent } from './shop-home/shop-card/shop-card.component';


@NgModule({
  declarations: [ShopHomeComponent, ShopCardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ShopModule { }
