import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-emptimesheets',
  templateUrl: './emptimesheets.component.html',
  styleUrls: ['./emptimesheets.component.css']
})
export class EmptimesheetsComponent{

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
  
  constructor() { }

  ngOnInit() {
  }

}
