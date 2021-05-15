import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  username: string | null;
  profileImage: string | null;
  subscriptionProfileImage: Subscription;
  subscriptionUsername: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscriptionUsername = this.authService.username$.subscribe(username => {
      this.username = username;
    });

    this.subscriptionProfileImage = this.authService.profileImage$.subscribe(profileImage => {
      this.profileImage = profileImage;
    });
  }

  onLogout(): void {
    this.authService.logout('You are logged out!');
  }

  ngOnDestroy(): void {
    this.subscriptionProfileImage.unsubscribe();
    this.subscriptionUsername.unsubscribe();
  }
}
