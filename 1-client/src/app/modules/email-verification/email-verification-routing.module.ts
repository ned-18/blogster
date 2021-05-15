import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationHomeComponent } from './email-verification-home/email-verification-home.component';

const routes: Routes = [
  { path: '', component: EmailVerificationHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailVerificationRoutingModule { }
