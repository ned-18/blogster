import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SidebarComponent } from './dashboard-home/sidebar/sidebar.component';
import { PostsComponent } from './dashboard-home/posts/posts.component';
import { PostFormComponent } from './dashboard-home/posts/post-form/post-form.component';
import { AddPostComponent } from './dashboard-home/posts/add-post/add-post.component';
import { EditPostComponent } from './dashboard-home/posts/edit-post/edit-post.component';
import { ProfileComponent } from './dashboard-home/profile/profile.component';
import { ProfileImageComponent } from './dashboard-home/profile-image/profile-image.component';
import { ChangePasswordComponent } from './dashboard-home/profile/change-password/change-password.component';
import { CommentsComponent } from './dashboard-home/comments/comments.component';
import { TableComponent } from './dashboard-home/table/table.component';
import { DeleteProfileComponent } from './dashboard-home/profile/delete-profile/delete-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    SidebarComponent,
    PostsComponent,
    AddPostComponent,
    PostFormComponent,
    ProfileComponent,
    EditPostComponent,
    ProfileImageComponent,
    ChangePasswordComponent,
    CommentsComponent,
    TableComponent,
    DeleteProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
