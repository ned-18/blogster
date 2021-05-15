import { FormControl } from '@angular/forms';

export function checkImageSize(control: FormControl) {
  if (control.value) {
    let imageSize = control.value.size;
    if (imageSize >= 1000000) {
        return { imageIsTooBig: true }
    }
    
    return null;
  }
  
}