import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() book: Book;
  @Output() onAddToCart: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    this.onAddToCart.emit();
  }
}
