import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutHomeComponent } from './checkout-home/checkout-home.component';
import { OrderDetailsComponent } from './checkout-home/order-details/order-details.component';


@NgModule({
  declarations: [CheckoutHomeComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CheckoutModule { }
