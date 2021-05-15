import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from '../../../../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() header: [];
  @Input() content: [];

  @Output() onDelete: EventEmitter<{}> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  delete(item: {}): void {
    const modalRef = this.modalService.open(DialogBoxComponent);
    modalRef.componentInstance.header = 'Are you sure you want to delete this?';
    modalRef.componentInstance.buttonOne = 'Delete';
    modalRef.componentInstance.buttonTwo = 'Cancel';
    this.onDelete.emit({ item, modalRef });
  }
}
