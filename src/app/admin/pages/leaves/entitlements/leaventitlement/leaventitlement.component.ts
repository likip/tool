import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-leaventitlement',
  templateUrl: './leaventitlement.component.html',
  styleUrls: ['./leaventitlement.component.css']
})
export class LeaventitlementComponent implements OnInit {

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

  public start: Date = new Date ("10/07/2017"); 
    public end: Date = new Date ("11/25/2017");

  ngOnInit() {
  }

}
