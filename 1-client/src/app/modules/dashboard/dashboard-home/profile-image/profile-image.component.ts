import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileService } from '../../../../service/user-profile.service';
import { AuthService } from '../../../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from '../../../../helpers/catchError';
import { checkImageSize } from '../../../../modules/validators/image-size';
import { checkMimeType } from '../../../../modules/validators/mime-type';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {
  isLoading = false;
  profileImageForm = new FormGroup({
    profileImageUrl: new FormControl(null, [checkMimeType, checkImageSize]),
  });

  constructor(
    private userService: UserProfileService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.uploadProfileImage(this.profileImageForm.value).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message);
        this.isLoading = false;
        this.authService.profileImage$.next(respone.profileImgUrl);
        this.router.navigate(['/dashboard/posts']);
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
