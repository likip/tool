import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-paygrades',
  templateUrl: './paygrades.component.html',
  styleUrls: ['./paygrades.component.css']
})
export class PaygradesComponent{

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
  paygrade:Boolean=true;
  addpaygrade(){
    this.paygrade=this.paygrade?false:true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
