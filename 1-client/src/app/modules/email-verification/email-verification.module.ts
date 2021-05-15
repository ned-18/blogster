import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';
import { EmailVerificationHomeComponent } from './email-verification-home/email-verification-home.component';


@NgModule({
  declarations: [EmailVerificationHomeComponent],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class EmailVerificationModule { }
