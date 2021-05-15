import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InputComponent } from './input/input.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ImageUploadInputComponent } from './image-upload-input/image-upload-input.component';
import { CardsComponent } from './cards/cards.component';
import { ShortenPipe } from './shorten.pipe';
import { MdNavbarComponent } from './md-navbar/md-navbar.component';

@NgModule({
  declarations: [InputComponent, DialogBoxComponent, ImageUploadInputComponent, CardsComponent, ShortenPipe, MdNavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [InputComponent, DialogBoxComponent, ImageUploadInputComponent, CardsComponent, ShortenPipe, MdNavbarComponent]
})
export class SharedModule { }
