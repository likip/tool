import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-leaveentitlement',
  templateUrl: './leaveentitlement.component.html',
  styleUrls: ['./leaveentitlement.component.css']
})
export class LeaveentitlementComponent  {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  opened=false;
  open=false;

  constructor() { }

  ngOnInit() {
  }

}
