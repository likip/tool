import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-mytimesheets',
  templateUrl: './mytimesheets.component.html',
  styleUrls: ['./mytimesheets.component.css']
})

export class MytimesheetsComponent {
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

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
}

education:Boolean=true;
ShowEducation(){
  this.education=this.education?false:true;
}
}