import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../../service/auth.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnDestroy {
  @Input() postId: number;
  @Output('onSubmit') postComment: EventEmitter<{}> = new EventEmitter();
  signedIn: boolean;
  subscription: Subscription;

  commentForm = new FormGroup({
    comment: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription =this.authService.signedIn$.subscribe(signedIn => {
      this.signedIn = signedIn;
    });
  }

  showErrors(control: string): boolean {
    const { invalid, touched, dirty } = this.commentForm.get(control);
    return invalid && (touched || dirty);
  }

  onCreateComment(commentForm: { comment: string }): void {
    this.commentForm.reset();
    this.postComment.emit(commentForm);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
