import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.css']
})
export class GeneralinfoComponent{

  
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

  contact = true;

  constructor() { }

  ngOnInit() {
  }

}
