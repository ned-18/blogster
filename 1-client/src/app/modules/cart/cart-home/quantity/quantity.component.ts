import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit{
  @Input() quantity: number;

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  increase(): boolean {
    if (this.quantity === 10) { return false; }
    this.quantity = this.quantity + 1;
    this.onChange.emit('increase');
  }

  decrease(): boolean {
    if (this.quantity === 1) { return false; }
    this.quantity = this.quantity - 1;
    this.onChange.emit('decrease');
  }

}
