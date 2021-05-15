import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../service/auth.service';
import { CheckPasswords } from '../../validators/checkPasswords';
import { checkEmail } from '../../validators/checkEmail';
import { checkPassword } from '../../validators/checkPassword';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEmailExists: string | null;
  isUsernameExists: string | null;
  isLoading = false;

  signUpForm = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
    lastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
    username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    email: new FormControl(null, [checkEmail]),
    password: new FormControl(null, [checkPassword]),
    confirmPassword: new FormControl(null, [checkPassword]),
  }, {validators: [this.checkPasswords.validate]});

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private checkPasswords: CheckPasswords,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onRegisterSubmit(): void {
    this.isLoading = true;
    this.authService.registerUser(this.signUpForm.value).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message, 'Welcome!');
        this.isLoading = false;
        this.router.navigate(['/join/login']);
      },
      error: (error: HttpErrorResponse) => { this.catchError(error); }
    });
  }

  private catchError(error: HttpErrorResponse): void {
    if (error.status === 400) {
      if (error.error.message.includes('Email')) {
        this.isEmailExists = error.error.message;
      } else if (error.error.message.includes('Username')) {
        this.isUsernameExists = error.error.message;
      }
    } else {
      this.toastr.error('Something went wrong! Please try later.', 'Error');
    }
    this.isLoading = false;
  }
}
