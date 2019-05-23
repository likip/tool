import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent{

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
 
add:Boolean=true;

  Showadd(){
    this.add=this.add?false:true;
  }
}
