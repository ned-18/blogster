import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostHomeComponent } from './blog-post-home/blog-post-home.component';
import { CommentsComponent } from './blog-post-home/comments/comments.component';

const routes: Routes = [
  { path: '', component: BlogPostHomeComponent },
  { path: 'comment', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostRoutingModule { }
