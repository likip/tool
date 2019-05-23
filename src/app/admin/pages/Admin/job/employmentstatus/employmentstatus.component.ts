import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-employmentstatus',
  templateUrl: './employmentstatus.component.html',
  styleUrls: ['./employmentstatus.component.css']
})
export class EmploymentstatusComponent{

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

  empstatus:Boolean=true;

  addempstatus(){
    this.empstatus = this.empstatus?false : true;
  }

  constructor() { }

  ngOnInit() {
  }

}
