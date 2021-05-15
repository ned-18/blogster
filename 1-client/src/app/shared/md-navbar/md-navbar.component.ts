import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { userIsNotSignedNavItems } from '../../helpers/items';
import { flyInOut } from './animations';

@Component({
  selector: 'app-md-navbar',
  templateUrl: './md-navbar.component.html',
  styleUrls: ['./md-navbar.component.css'],
  animations: [flyInOut]
})
export class MdNavbarComponent implements OnInit, OnDestroy {
  @Input() link: string;
  @Input() items: [{}];
  isOpen = false;
  signedIn: boolean;
  username: string | null;
  subscriptionSignedIn: Subscription;
  subscriptionUsername: Subscription;
  itemsUserIsNotSigned = userIsNotSignedNavItems;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscriptionSignedIn = this.authService.signedIn$.subscribe(signedIn => {
      this.signedIn = signedIn;
    });

    this.subscriptionUsername = this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  onLogout(): void {
    this.authService.logout('You are logged out!');
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.subscriptionSignedIn.unsubscribe();
    this.subscriptionUsername.unsubscribe();
  }
}
