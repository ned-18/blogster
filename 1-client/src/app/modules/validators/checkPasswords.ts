import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CheckPasswords implements Validator {
    validate(formGroup: FormGroup) {
        const { password, confirmPassword } = formGroup.value;

        if (password === confirmPassword) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
    }
}