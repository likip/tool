import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

export interface Leave {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addentitlement',
  templateUrl: './addentitlement.component.html',
  styleUrls: ['./addentitlement.component.css']
})
export class AddentitlementComponent{

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
    {value: 'AnnualLeave', viewValue: 'Annual Leave'},
    {value: 'Lossofpay', viewValue: 'Loss of pay'},
    {value: 'BereavementLeave', viewValue: 'Bereavement Leave'},
    {value: 'MaternityLeave', viewValue: 'Maternity Leave'},
    {value: 'MedicalLeave', viewValue: 'Medical Leave'},
    {value: 'PaternityLeave', viewValue: 'Paternity Leave'},
    {value: 'SpecialLeave', viewValue: 'Special Leave'},

  ];

}
