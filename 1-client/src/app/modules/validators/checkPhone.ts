import { FormControl } from '@angular/forms';

export function checkPhone(control: FormControl) {
    if (control.untouched) {
        return null;
    } else {
        const phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        return phoneRe.test(control.value) ? null : { phoneIsNotValid: true}
    }   
    
}