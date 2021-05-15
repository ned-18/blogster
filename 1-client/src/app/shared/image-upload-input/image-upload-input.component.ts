import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-image-upload-input',
  templateUrl: './image-upload-input.component.html',
  styleUrls: ['./image-upload-input.component.css']
})
export class ImageUploadInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() labelClass: string;
  @Input() imageUploadClass: string;
  @Input() imageNameClass: string;
  @Input() imagePreviewClass: string;

  imageData: string;
  imageName: string;

  constructor() { }

  ngOnInit(): void { }

  get validator(): ValidationErrors {
    const validator = this.control.validator({} as AbstractControl);
    return validator;
  }
  
  onImageSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    this.control.patchValue(file);
    this.control.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageData = reader.result as string;
    };

    if (file && allowedMimeTypes.includes(file.type) && file.size < 1000000){
      reader.readAsDataURL(file);
      this.imageName = file.name;
    } else {
      this.imageData = null;
      this.imageName = null;
    }
  }

}
