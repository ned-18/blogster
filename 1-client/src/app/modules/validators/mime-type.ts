import { FormControl } from '@angular/forms';

export function checkMimeType(control: FormControl) {
  if (control.value && control.value.name) {
    let valToLower = control.value.name.toLowerCase();
    let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$"); //add or remove required extensions here

    return regex.test(valToLower) ? null : { notSupportedFileType: true };
  } else if (control.value === typeof String) {
    let valToLower = control.value.toLowerCase();
    let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$"); //add or remove required extensions here

    return regex.test(valToLower) ? null : { notSupportedFileType: true };
  }
  
}