import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NewPasswordService } from '../../../service/new-password.service';
import { catchError } from '../../../helpers/catchError';

import { checkEmail } from '../../validators/checkEmail';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isLoading = false;
  forgotPasswordForm = new FormGroup({
    email: new FormControl(null, [checkEmail])
  });
  constructor(
    private newPasswordService: NewPasswordService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isLoading = true;
    this.newPasswordService.forgotPassword(this.forgotPasswordForm.value).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message);
        this.forgotPasswordForm.reset();
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
