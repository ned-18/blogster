import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostHomeComponent } from './blog-post-home/blog-post-home.component';
import { CommentsComponent } from './blog-post-home/comments/comments.component';
import { CommentComponent } from './blog-post-home/comments/comment/comment.component';
import { CommentFormComponent } from './blog-post-home/comments/comment-form/comment-form.component';


@NgModule({
  declarations: [BlogPostHomeComponent, CommentsComponent, CommentComponent, CommentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogPostRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class BlogPostModule { }
