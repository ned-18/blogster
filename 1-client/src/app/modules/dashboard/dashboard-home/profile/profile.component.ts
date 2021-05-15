import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfileService } from '../../../../service/user-profile.service';
import { AuthService } from '../../../../service/auth.service';
import { catchError } from '../../../../helpers/catchError';

import { checkEmail } from '../../../validators/checkEmail';
import { checkPhone } from '../../../validators/checkPhone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEmailExists: string | null;
  isUsernameExists: string | null;
  isLoading = false;

  profileForm = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
    lastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
    username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    email: new FormControl(null, [checkEmail]),
    phone: new FormControl(null, [checkPhone]),
    birthday: new FormControl(null, [Validators.nullValidator])
  });

  constructor(
    private userService: UserProfileService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getProfile().subscribe({
      next: (respone) => {
        const profileData = {
          firstName: respone.data.firstName,
          lastName: respone.data.lastName,
          username: respone.data.username,
          email: respone.data.email,
          phone: respone.data.phone,
          birthday: respone.data.birthday
        };
        this.profileForm.setValue(profileData);
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }

  editProfile(): void {
    this.isLoading = true;
    this.userService.editProfile(this.profileForm.value).subscribe({
      next: (respone) => {
        this.isLoading = false;
        this.authService.username$.next(this.profileForm.get('username').value);
        this.toastr.info(respone.message);
        this.router.navigate(['/dashboard/posts']);
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
