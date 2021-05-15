import { Component, OnInit } from '@angular/core';
import { dashboardNavItems } from '../../../helpers/items';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  items = dashboardNavItems;
  constructor() { }

  ngOnInit(): void { }
}
