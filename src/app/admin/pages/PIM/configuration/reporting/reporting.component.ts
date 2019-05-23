import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent{

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
  
  reporting: Boolean = true;
  clientmanager: Boolean = true;
  directt:Boolean=true;
  indirect:Boolean=true;
  selfreport:Boolean=true;

  AddReport() {
    this.reporting = this.reporting ? false : true;
 }
Client(){
  this.clientmanager = this.clientmanager?false:true;
}
Direct(){
  this.directt=this.directt?false:true;
}
Indirect(){
  this.indirect=this.indirect?false:true;
}
Selfreport(){
  this.selfreport=this.selfreport?false:true;
}

  constructor() { }

  ngOnInit() {
  }

}
