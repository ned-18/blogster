import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  username: string | null;
  signedIn: boolean;
  totalItems: number;
  subscriptionSignedIn: Subscription;
  subscriptionUsername: Subscription;
  subscriptionCartTotalItems: Subscription;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // Check if user signed in
    this.subscriptionSignedIn = this.authService.signedIn$.subscribe(signedIn => {
      this.signedIn = signedIn;
    });

    // Get users username if she/he is logged in
    this.subscriptionUsername = this.authService.username$.subscribe(username => {
      this.username = username;
    });

    // Get users items in cart
    this.subscriptionCartTotalItems = this.cartService.cartTotalItems$.subscribe(items => {
      this.totalItems = items;
    });
  }

  onLogout(): void {
    this.authService.logout('You are logged out!');
  }

  ngOnDestroy(): void {
    this.subscriptionSignedIn.unsubscribe();
    this.subscriptionUsername.unsubscribe();
    this.subscriptionCartTotalItems.unsubscribe();
  }
}
