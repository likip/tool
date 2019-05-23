import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-emailconfiguration',
  templateUrl: './emailconfiguration.component.html',
  styleUrls: ['./emailconfiguration.component.css']
})
export class EmailconfigurationComponent{
 
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

  contact =true;
  constructor() { }

  ngOnInit() {
  }

}
