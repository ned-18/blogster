import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../../../service/posts.service';
import { catchError } from '../../../../../helpers/catchError';
import { checkMimeType } from '../../../../validators/mime-type';
import { checkImageSize } from '../../../../validators/image-size';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() title: string;
  @Input() buttonLabel: string;
  @Input() isLoading: boolean;
  @Output() onSubmit: EventEmitter<{}> = new EventEmitter();

  private mode = 'create';
  private postId: string;

  postFrom = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    imageUrl: new FormControl(null, [Validators.required, checkMimeType, checkImageSize]),
    type: new FormControl('travel', [Validators.required]),
    content: new FormControl(null, [Validators.required, Validators.minLength(15)]),
  });

  constructor(
    public route: ActivatedRoute,
    private postsService: PostsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getOnePost(this.postId).subscribe({
          next: (respone) => {
            const post = {
              title: respone.data.title,
              imageUrl: respone.data.imageUrl,
              type: respone.data.type,
              content: respone.data.content
            };
            this.postFrom.setValue(post);
            this.isLoading = false;
          },
          error: (error: HttpErrorResponse) => { catchError(this.toastr); this.isLoading = false; }
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  submit(): void {
    this.onSubmit.emit({formValue: this.postFrom.value, postId: this.postId});
  }

  showErrors(control: string): boolean {
    const { invalid, touched, dirty } = this.postFrom.get(control);
    return invalid && (touched || dirty);
   }
}
