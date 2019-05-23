import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-jobcategories',
  templateUrl: './jobcategories.component.html',
  styleUrls: ['./jobcategories.component.css']
})
export class JobcategoriesComponent {

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

  jobcategories:Boolean=true;

  addjobcategories(){
    this.jobcategories=this.jobcategories?false:true;
  }

  constructor() { }

  ngOnInit() {
  }

}
