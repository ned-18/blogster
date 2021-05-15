import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  @Input() header: string;
  @Input() body: string;
  @Input() buttonOne: string;
  @Input() buttonTwo: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

}
