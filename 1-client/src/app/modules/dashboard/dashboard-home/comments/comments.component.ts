import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '../../../../service/comments.service';
import { UserProfileService } from '../../../../service/user-profile.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from '../../../../helpers/catchError';

import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  header: string[] = ['Comment', 'Created', 'Delete'];
  isLoading = false;

  constructor(
    private commentsService: CommentsService,
    private userService: UserProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllUserComments();
  }

  deleteComment(comment: { item: Comment, modalRef: NgbModalRef }): void {
    comment.modalRef.result
      .then(() => {
        this.isLoading = true;
        this.commentsService.deleteComment(comment.item.id).subscribe({
          next: (respone) => {
            this.toastr.info(respone.message);
            this.getAllUserComments();
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

  private getAllUserComments(): void {
    this.userService.getProfile().subscribe({
      next: (respone) => {
        this.comments = respone.data.comment;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
