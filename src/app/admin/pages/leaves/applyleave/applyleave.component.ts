import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

export interface Leave {
  value: string;
  viewValue: string;
}

export interface Duration{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent  {

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
  leaves: Leave[] = [
    {value: 'Annual', viewValue: 'Annual'},
    {value: 'Sick', viewValue: 'Sick'},
    {value: 'Paid', viewValue: 'Paid'}
  ];
  durations: Duration[] =[
    {value: 'Fullday',viewValue:'Fullday'},
    {value: 'Halfday',viewValue:'Halfday'},
    {value: 'SpecifyTime',viewValue:'SpecifyTime'},
  ]
}

