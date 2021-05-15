import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import {
  GetUserProfileRespone,
  UpdateUserProfileRespone,
  ChangePasswordRespone,
  UploadProfileImageRespone,
  DeleteProfileRespone
} from '../modules/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // User profile
  getProfile(): Observable<GetUserProfileRespone> {
    return this.http.get<GetUserProfileRespone>(`${enviroment.rootURL}/profile`);
  }

  // Edit user profile
  editProfile(profileData: any): Observable<UpdateUserProfileRespone> {
    return this.http.put<UpdateUserProfileRespone>(`${enviroment.rootURL}/profile`, profileData, { headers: this.headers });
  }

   // Change password
  changePassword(passwords: string): Observable<ChangePasswordRespone> {
    return this.http.put<ChangePasswordRespone>(`${enviroment.rootURL}/change-password`, passwords, { headers: this.headers });
  }

  // Upload user profile image
  uploadProfileImage(formData: {profileImageUrl: File}): Observable<UploadProfileImageRespone> {
    const profileImage = new FormData();
    profileImage.append('imageUrl', formData.profileImageUrl);
    return this.http.put<UploadProfileImageRespone>(`${enviroment.rootURL}/profile-image`, profileImage);
  }

  // Delete users profile
  deleteProfile(password: string): Observable<DeleteProfileRespone> {
    return this.http.put<DeleteProfileRespone>(`${enviroment.rootURL}/delete-profile`, password);
  }
}
