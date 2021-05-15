import { FormControl } from '@angular/forms';

export function checkPassword(control: FormControl) {
    let   passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,60}$/;

    return passwordRe.test(control.value) ? null : { passwordIsNotValid: true}
}