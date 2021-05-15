import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../../../service/posts.service';
import { catchError } from '../../../../../helpers/catchError';

import { FormData } from '../../../../models/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  isLoading = false;
  constructor(
    private postsService: PostsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addPost(formData: FormData): void {
    this.isLoading = true;
    this.postsService.createPost(formData.formValue).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message);
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
