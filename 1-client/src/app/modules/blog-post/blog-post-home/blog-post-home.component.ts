import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../service/posts.service';
import { catchError } from '../../../helpers/catchError';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-blog-post-home',
  templateUrl: './blog-post-home.component.html',
  styleUrls: ['./blog-post-home.component.css']
})
export class BlogPostHomeComponent implements OnInit {
  postId: string;
  post: Post;
  isLoading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
    this.getPost();
  }

  private getPost(): void {
    this.postsService.getOnePost(this.postId).subscribe({
      next: (respone) => {
        this.post = respone.data;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
