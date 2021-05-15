import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../../service/contact.service';
import { catchError } from '../../../helpers/catchError';

import { checkEmail } from '../../validators/checkEmail';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  isLoading = false;
  contactFrom = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(60)]),
    email: new FormControl(null, [checkEmail]),
    subject: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    message: new FormControl(null, [Validators.required, Validators.minLength(15)])
  });

  constructor(private contactService: ContactService, private toastr: ToastrService) {}

  ngOnInit(): void { }

  showErrors(control: string): boolean {
    const { invalid, touched, dirty } = this.contactFrom.get(control);
    return invalid && (touched || dirty);
   }

  onSubmit(): void {
    this.isLoading = true;
    this.contactService.sendEmail(this.contactFrom.value).subscribe({
      next: (respone) => {
        this.toastr.success(respone.message);
        this.contactFrom.reset();
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        catchError(this.toastr);
        this.isLoading = false;
      }
    });
  }
}
