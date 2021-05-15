import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import {
  PostRespone,
  PostsRespone,
  CreatePostRespone,
  UpdatePostRespone,
  DeletePostRespone,
  PostServer } from '../modules/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  // Get all posts
  getAllPosts(postsPerPage: number, currentPage: number, type: string): Observable<PostsRespone> {
    const queryParams = `?page=${currentPage}&limit=${postsPerPage}&type=${type}`;
    return this.http.get<PostsRespone>(`${enviroment.rootURL}/posts${queryParams}`);
  }

  // Get one post
  getOnePost(postId: string): Observable<PostRespone> {
    return this.http.get<PostRespone>(`${enviroment.rootURL}/post/${postId}`);
  }

  // Create post
  createPost(post: PostServer): Observable<CreatePostRespone> {
    const postData = new FormData();
    postData.append('imageUrl', post.imageUrl);
    postData.append('title', post.title);
    postData.append('content', post.content);
    postData.append('type', post.type);
    return this.http.post<CreatePostRespone>(`${enviroment.rootURL}/post`, postData);
  }

  // Edit post
  editPost(post: PostServer, postId: number): Observable<UpdatePostRespone> {
    let postData;
    if (typeof (post.imageUrl) === 'object') {
      postData = new FormData();
      postData.append('imageUrl', post.imageUrl);
      postData.append('title', post.title);
      postData.append('content', post.content);
      postData.append('type', post.type);
      return this.http.put<UpdatePostRespone>(`${enviroment.rootURL}/post/${postId}`, postData);
    } else {
      return this.http.put<UpdatePostRespone>(`${enviroment.rootURL}/post/${postId}`, post, { headers: this.headers });
    }
  }

  // Delete post
  deletePost(postId: number): Observable<DeletePostRespone> {
    return this.http.delete<DeletePostRespone>(`${enviroment.rootURL}/post/${postId}`);
  }
}
