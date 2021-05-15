import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import {
  GetCommentRespone,
  PostCommentRespone,
  DeleteCommentRespone,
} from '../modules/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Get all comments
  getComments(postId: number): Observable<GetCommentRespone> {
    return this.http.get<GetCommentRespone>(`${enviroment.rootURL}/comments?postId=${postId}`);
  }

  // Create comment
  postComment(postId: number, comment: {comment: string}): Observable<PostCommentRespone> {
    return this.http.post<PostCommentRespone>(`${enviroment.rootURL}/comment?postId=${postId}`, comment, { headers: this.headers });
  }

  // Delete comment
  deleteComment(commentId: number): Observable<DeleteCommentRespone> {
    return this.http.delete<DeleteCommentRespone>(`${enviroment.rootURL}/comment/${commentId}`);
  }
}
