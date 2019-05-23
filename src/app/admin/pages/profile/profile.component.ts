import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

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

  selectDisabled = true;

  Disabled = true;

  contact = true;

  showMainContent: Boolean = true;

  show: Boolean = true;

  emergency: Boolean = true;
  addemergency: Boolean = true;
  adddependents:Boolean=true;
  dependent:Boolean=true;
  addimmigration:Boolean=true;
  immigration:Boolean=true;
  qualification:Boolean=true;
  work:Boolean=true;
  education:Boolean=true;
  skills:Boolean=true;
  language:Boolean=true;
  certificate:Boolean=true;

  constructor() {}

   ShowHideButton() {
      this.showMainContent = this.showMainContent ? false : true;
   }

   ShowContact(){
     this.show = this.show ? false : true;
   }

   ShowEmergency() {
     this.emergency = this.emergency ? false : true;
   }

   AddEmergency(){
     this.addemergency = this.addemergency ? false : true;
   }
   AddDependents(){
     this.adddependents=this.adddependents?false:true;
   }
   ShowDependents(){
     this.dependent=this.dependent?false:true;
   }

   AddImmigration(){
    this.addimmigration=this.addimmigration?false:true;
  }
  ShowImmigration(){
    this.immigration=this.immigration?false:true;
  }
  ShowQualification(){
    this.qualification=this.qualification?false:true;
  }

  ShowWork(){
    this.work=this.work?false:true;
  }
  ShowEducation(){
    this.education=this.education?false:true;
  }

  ShowSkills(){
    this.skills=this.skills?false:true;
  }

  ShowLanguges(){
    this.language=this.language?false:true;
  }

  ShowCertificates(){
    this.certificate=this.certificate?false:true;
  }

  ngOnInit() {
  }

}
