import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../../service/posts.service';
import { UserProfileService } from '../../../../service/user-profile.service';
import { catchError } from '../../../../helpers/catchError';

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  header: string[] = ['Image', 'Title', 'Created', 'Delete/Edit'];
  isLoading = false;
  constructor(
    private postsService: PostsService,
    private userService: UserProfileService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllUserPosts();
  }

  deletePost(post: { item: Post, modalRef: NgbModalRef }): void {
    post.modalRef.result
      .then(() => {
        this.isLoading = true;
        this.postsService.deletePost(post.item.id).subscribe({
          next: (respone) => {
            this.toastr.info(respone.message);
            this.getAllUserPosts();
            this.isLoading = false;
          },
          error: (error: HttpErrorResponse) => {
            catchError(this.toastr);
            this.isLoading = false;
          }
        });
      })
      .catch((error) => {});
  }

  private getAllUserPosts(): void {
    this.userService.getProfile().subscribe({
      next: (respone) => {
        this.posts = respone.data.post;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
