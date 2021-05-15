import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from './shop.service';

import { Cart } from '../modules/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartDataClient: Cart = {
    data: [{
      product: undefined,
      quantity: 0
    }],
    total: 0
  };
  cartTotalItems$ = new BehaviorSubject<number>(0);

  cartData$ = new BehaviorSubject<Cart>(this.cartDataClient);

  constructor(
    private shopService: ShopService,
    private toastr: ToastrService
  ) {
    const cart: Cart = JSON.parse(localStorage.getItem('cart'));

    if (cart !== null && cart !== undefined && cart.data[0]?.quantity !== 0) {
      this.cartDataClient = cart;
      this.cartData$.next({ ...this.cartDataClient });
      this.cartTotalItems$.next(this.cartDataClient.total);
    }
  }

  addToCart(id: number): void {
    this.shopService.getOneBook(id).subscribe({
      next: (book) => {
        if (this.cartDataClient.data[0].product === undefined) {
          this.cartDataClient.data[0].product = book.data;
          this.cartDataClient.data[0].quantity = 1;
          this.cartDataClient.total++;
          this.cartData$.next({ ...this.cartDataClient });
          this.cartTotalItems$.next(this.cartDataClient.total);
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.toastr.success('Book is added to the cart.');
          return;
        } else {
          const index = this.cartDataClient.data.findIndex(p => p.product.id === id);
          if (index === -1) {
            this.cartDataClient.data.push({
              product: book.data,
              quantity: 1
            });

            this.cartData$.next({ ...this.cartDataClient });
            this.cartDataClient.total++;
            this.cartTotalItems$.next(this.cartDataClient.total);
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            this.toastr.success('Book is added to the cart.');
            return;
          } else {
            this.toastr.info('Book is already added to the cart.');
            return;
          }
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteProductFromCart(index: number): void {
    if (this.cartDataClient.data.length === 1) {
      this.cartDataClient = {
        data: [{
          product: undefined,
          quantity: 0
        }],
        total: 0
      };
    } else {
      this.cartDataClient.data.splice(index, 1);
      this.cartDataClient.total--;
    }

    this.cartData$.next({ ...this.cartDataClient });
    this.cartTotalItems$.next(this.cartDataClient.total);
    localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    this.toastr.info('Book is deleted from the cart.');
  }

  deleteAllProductsFromCart(): void {
    this.cartDataClient = {
      data: [{
        product: undefined,
        quantity: 0
      }],
      total: 0
    };

    this.cartData$.next({ ...this.cartDataClient });
    this.cartTotalItems$.next(this.cartDataClient.total);
    localStorage.clear();
  }
}
