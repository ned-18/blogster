import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { PostsComponent } from './dashboard-home/posts/posts.component';
import { AddPostComponent } from './dashboard-home/posts/add-post/add-post.component';
import { EditPostComponent } from './dashboard-home/posts/edit-post/edit-post.component';
import { ProfileComponent } from './dashboard-home/profile/profile.component';
import { ChangePasswordComponent } from './dashboard-home/profile/change-password/change-password.component';
import { ProfileImageComponent } from './dashboard-home/profile-image/profile-image.component';
import { CommentsComponent } from './dashboard-home/comments/comments.component';
import { DeleteProfileComponent } from './dashboard-home/profile/delete-profile/delete-profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardHomeComponent, children: [
      { path: 'posts', component: PostsComponent },
      { path: 'add-post', component: AddPostComponent },
      { path: 'edit-post/:postId', component: EditPostComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/change-password', component: ChangePasswordComponent },
      { path: 'profile/delete-profile', component: DeleteProfileComponent },
      { path: 'profile-image', component: ProfileImageComponent },
      { path: 'comments', component: CommentsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
