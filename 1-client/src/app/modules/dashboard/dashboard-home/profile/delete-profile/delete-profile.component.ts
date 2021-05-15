import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfileService } from '../../../../../service/user-profile.service';
import { AuthService } from '../../../../../service/auth.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {
  error: string;
  isLoading = false;
  deleteProfileForm = new FormGroup({
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private toastr: ToastrService,
    private userProfileService: UserProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void { }

  deleteProfile(): void {
    this.isLoading = true;
    this.userProfileService.deleteProfile(this.deleteProfileForm.value).subscribe({
      next: (respone) => {
        this.isLoading = false;
        this.authService.logout(respone.message);
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        this.catchError(error);
      }
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
