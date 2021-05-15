import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { QuantityComponent } from './cart-home/quantity/quantity.component';

@NgModule({
  declarations: [CartHomeComponent, QuantityComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule,
    FormsModule,
    SharedModule
  ]
})
export class CartModule { }
