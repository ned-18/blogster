import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../../service/cart.service';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit, OnDestroy {
  cart: Cart;
  totalPrice = 0;
  subscription: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getUserCart();
    console.log(this.cart);
  }

  deleteBook(index: number): void {
    this.cartService.deleteProductFromCart(index);
  }

  quantity(event: string, index: number): void {
    if (event === 'increase') {
      this.incOrDec(index, 'ADD');
    } else if (event === 'decrease') {
      this.incOrDec(index, 'SUBTRACTION');
    }
  }

  private getUserCart(): void {
    this.subscription = this.cartService.cartData$.subscribe(data => {
        this.cart = data;
        let price = 0;
        this.cart.data.forEach(item => {
          price = price + (Number(item.product?.price) * item.quantity);
        });
        this.totalPrice = price;
    });
  }

  private incOrDec(index: number, operand: string): void {
    if (operand === 'ADD') {
      this.totalPrice = this.totalPrice + Number(this.cart.data[index].product.price);
      this.cart.data[index].quantity++;
    } else if (operand === 'SUBTRACTION') {
      this.totalPrice = this.totalPrice - Number(this.cart.data[index].product.price);
      this.cart.data[index].quantity--;
    }
    this.cartService.cartData$.next({ ...this.cart });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
