import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../../../service/cart.service';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-checkout-home',
  templateUrl: './checkout-home.component.html',
  styleUrls: ['./checkout-home.component.css']
})
export class CheckoutHomeComponent implements OnInit, OnDestroy {
  orderDetails: Cart;
  totalPrice: number;
  subscription: Subscription;

  checkout = new FormGroup({
    cardholderName: new FormControl(null, [Validators.required]),
    cardNumber: new FormControl(null, [Validators.required]),
    expiryDate: new FormControl (null, [Validators.required]),
    cvv: new FormControl(null, [Validators.required]),
  });
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  onSubmit(): void {
    console.log(this.checkout.value);
  }

  private getOrderDetails(): void {
    this.subscription = this.cartService.cartData$.subscribe(data => {
      this.orderDetails = data;
      let price = 0;
      this.orderDetails.data.forEach(item => {
        price = price + (Number(item.product?.price) * item.quantity);
      });
      this.totalPrice = price;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
