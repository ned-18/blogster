import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../../../service/posts.service';
import { catchError } from '../../../../../helpers/catchError';

import { FormData } from '../../../../models/Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  isLoading = false;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  editPost(formData: FormData): void {
    this.isLoading = true;
    this.postsService.editPost(formData.formValue, formData.postId).subscribe({
      next: (respone) => {
        this.toastr.info(respone.message);
        this.isLoading = false;
        this.router.navigate(['/dashboard/posts']);
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
