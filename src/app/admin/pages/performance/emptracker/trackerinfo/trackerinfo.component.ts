import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-trackerinfo',
  templateUrl: './trackerinfo.component.html',
  styleUrls: ['./trackerinfo.component.css']
})
export class TrackerinfoComponent{

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

  tracker:Boolean=true;

  Showtracker(){
    this.tracker=this.tracker?false:true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
