import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserProfileService } from '../../../../../service/user-profile.service';
import { AuthService } from '../../../../../service/auth.service';
import { catchError } from '../../../../../helpers/catchError';

import { checkPassword } from '../../../../validators/checkPassword';
import { CheckPasswords } from '../../../../validators/checkPasswords';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isLoading = false;
  passwordForm = new FormGroup({
    oldPassword: new FormControl(null, [checkPassword]),
    password: new FormControl(null, [checkPassword]),
    confirmPassword: new FormControl(null, [checkPassword]),
  }, {validators: [this.checkPasswords.validate]});

  constructor(
    private toastr: ToastrService,
    private checkPasswords: CheckPasswords,
    private userService: UserProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isLoading = true;
    this.userService.changePassword(this.passwordForm.value).subscribe({
      next: (respone) => {
        this.isLoading = false;
        this.authService.logout(`${respone.message} Please log in again.`);
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
