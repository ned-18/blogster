import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewPasswordService } from '../../../service/new-password.service';
import { catchError } from '../../../helpers/catchError';

import { checkPassword } from '../../validators/checkPassword';
import { CheckPasswords } from '../../validators/checkPasswords';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  isLoading = false;
  resetPasswordForm = new FormGroup({
    password: new FormControl(null, [checkPassword]),
    confirmPassword: new FormControl(null, [checkPassword])
  }, { validators: [this.checkPasswords.validate] });
  constructor(
    private checkPasswords: CheckPasswords,
    private newPasswordService: NewPasswordService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isLoading = true;
    this.newPasswordService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message);
        this.isLoading = false;
        this.router.navigate(['/join/login']);
        this.resetPasswordForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}

