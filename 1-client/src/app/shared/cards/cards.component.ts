import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { PostsService } from '../../service/posts.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from '../../helpers/catchError';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  posts = [];
  totalPosts: number;
  postsPerPage = 2;
  currentPage = 0;
  isLoading = false;

  constructor(
    private postsService: PostsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllPosts();
  }

  changedPage(pageData: PageEvent): void {
    this.currentPage = pageData.pageIndex;
    this.postsPerPage = pageData.pageSize;
    this.getAllPosts();
  }

  private getAllPosts(): void {
    this.postsService.getAllPosts(this.postsPerPage, this.currentPage, this.type).subscribe({
      next: (respone) => {
        this.posts = respone.data;
        this.totalPosts = respone.totalPosts;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
