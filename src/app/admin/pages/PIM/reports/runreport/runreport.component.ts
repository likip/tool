import { Component, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material';

@Component({
  selector: 'app-runreport',
  templateUrl: './runreport.component.html',
  styleUrls: ['./runreport.component.css']
})
export class RunreportComponent {

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
}

  
