import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ContactMeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class ContactModule { }
