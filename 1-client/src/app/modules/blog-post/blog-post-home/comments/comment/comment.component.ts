import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: { user: { profileImgUrl: string, username: string }; comment: string; createdAt: string };
  constructor() {}

  ngOnInit(): void {}
}
