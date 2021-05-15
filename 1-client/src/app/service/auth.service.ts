import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './cart.service';
import { enviroment } from '../../environments/environment';
import {
  RegisterRespone,
  RegisterUser,
  LoginRespone,
  LoginUser,
  LogoutRespone,
  CheckAuthUser
} from '../modules/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn$ = new BehaviorSubject<boolean>(null);
  username$ = new BehaviorSubject<string>(null);
  profileImage$ = new BehaviorSubject<string>(null);

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private cartService: CartService
  ) { }

  // USER AUTH
  registerUser(user: RegisterUser): Observable<RegisterRespone> {
    return this.http.post<RegisterRespone>(`${enviroment.rootURL}/auth/register`, user, { headers: this.headers });
  }

  loginUser(user: LoginUser): Observable<LoginRespone> {
    return this.http.post<LoginRespone>(`${enviroment.rootURL}/auth/login`, user, { headers: this.headers }).pipe(
      tap((respone) => {
        this.profileImage$.next(respone.user.profileImage);
        this.signedIn$.next(true);
      })
    );
  }

  logout(message: string): Subscription {
    return this.http.get<LogoutRespone>(`${enviroment.rootURL}/auth/logout`, { headers: this.headers }).pipe(tap(() => {
      this.signedIn$.next(false);
      this.cartService.deleteAllProductsFromCart();
    })).subscribe({
      next: (respone) => {
        this.toastr.info(message, 'Goodbye');
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.toastr.error(error.message, 'Error');
      }
    });
  }

  checkAuth(): Observable<CheckAuthUser> {
    return this.http.get<CheckAuthUser>(
      `${enviroment.rootURL}/auth/check-auth`, { headers: this.headers }
    ).pipe(tap(({ authenticated, username, profileImage }) => {
      this.username$.next(username);
      this.signedIn$.next(authenticated);
      this.profileImage$.next(profileImage);
    }));
  }
}
