import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-jobtitles',
  templateUrl: './jobtitles.component.html',
  styleUrls: ['./jobtitles.component.css']
})
export class JobtitlesComponent {

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

  jobtitle:Boolean=true;

  addjobtitle() {
    this.jobtitle = this.jobtitle ? false : true;
 }
 
  constructor() { }

  ngOnInit() {
  }

}
