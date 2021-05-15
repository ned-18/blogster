import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() type: string;
  @Input() name: string;
  @Input() maxlength: string;
  date: string;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date().toISOString().slice(0, 10);
  }

  get showErrors(): boolean {
    const { invalid, touched, dirty } = this.control;
    return invalid && (touched || dirty);
  }

  get validator(): ValidationErrors {
    const validator = this.control.validator({} as AbstractControl);
    return validator;
  }
}
