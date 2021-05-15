import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from '../../../service/shop.service';
import { CartService } from '../../../service/cart.service';
import { AuthService } from '../../../service/auth.service';
import { catchError } from '../../../helpers/catchError';

import { Book } from '../../models/Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  signedIn: boolean;
  isLoading = false;
  subscription: Subscription;

  constructor(
    private shopService: ShopService,
    private cartService: CartService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllBooks();
    this.subscription = this.authService.signedIn$.subscribe(signedIn => {
      this.signedIn = signedIn;
    });
  }

  addToCart(id: number): void {
    if (this.signedIn) {
      this.cartService.addToCart(id);
    } else {
      this.toastr.info('Please login to add book into cart!')
    }
  }

  private getAllBooks(): void {
    this.shopService.getAllBooks().subscribe({
      next: (respone) => {
        this.books = respone.data;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
