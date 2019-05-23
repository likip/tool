import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nationalities',
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.css']
})
export class NationalitiesComponent {

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
  nationalities:Boolean=true;
  addnationalities(){
    this.nationalities=this.nationalities?false:true;
  }

  constructor() { }

  ngOnInit() {
  }

}
