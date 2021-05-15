import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailVerificationService } from '../../../service/email-verification.service';

@Component({
  selector: 'app-email-verification-home',
  templateUrl: './email-verification-home.component.html',
  styleUrls: ['./email-verification-home.component.css']
})
export class EmailVerificationHomeComponent implements OnInit {
  message: string;
  success: boolean;
  isLoading = false;
  constructor(private emailVerificationService: EmailVerificationService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.emailVerificationService.emailVerification().subscribe({
      next: (respone) => {
        this.message = respone.message;
        this.success = true;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.success = false;
        this.message = 'Something went wrong. Maybe your token is invalid or has expired.';
        this.isLoading = false;
      }
    });
  }
}
