import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../service/auth.service';
import { checkPassword } from '../../validators/checkPassword';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string | null;
  isLoading = false;

  logInForm = new FormGroup({
    usernameOrEmail: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    password: new FormControl(null, [checkPassword]),
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onLoginSubmit(): void {
    this.isLoading = true;
    this.authService.loginUser(this.logInForm.value).subscribe({
      next: (respone) => {
        this.toastr.info(respone.message, 'Welcome!');
        this.authService.username$.next(respone.user.username);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => { this.catchError(error); }
    });
  }

  private catchError(error: HttpErrorResponse): void {
    if (error.status === 401) {
      this.error = error.error.message;
    } else {
      this.toastr.error('Something went wrong! Please try later.', 'Error');
    }
    this.isLoading = false;
  }
}
