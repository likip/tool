import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-myleaventitlement',
  templateUrl: './myleaventitlement.component.html',
  styleUrls: ['./myleaventitlement.component.css']
})
export class MyleaventitlementComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
