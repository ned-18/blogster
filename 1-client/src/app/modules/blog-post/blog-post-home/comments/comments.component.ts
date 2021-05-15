import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../../../service/comments.service';
import { catchError } from '../../../../helpers/catchError';

import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: number;
  comments: Comment[] = [];
  title: string;
  isLoading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postId = Number(this.activatedRoute.snapshot.paramMap.get('postId'));
    this.getComments();
  }

  createNewComment(commentFormValue: { comment: string }): void {
    this.isLoading = true;
    this.commentsService.postComment(this.postId, commentFormValue).subscribe({
      next: (respone) => {
        this.getComments();
        this.toastr.success(respone.message);
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }

  private getComments(): void {
    this.commentsService.getComments(this.postId).subscribe({
      next: (respone) => {
        console.log(respone);
        this.comments = respone.comments;
        this.title = respone.postTitle;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}


