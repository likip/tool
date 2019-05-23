import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-termination',
  templateUrl: './termination.component.html',
  styleUrls: ['./termination.component.css']
})
export class TerminationComponent{

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

  contract:Boolean=true;
  termination:Boolean=true;
  deceased:Boolean=true;
  dismissed:Boolean=true;
  illness:Boolean=true;
  integrity:Boolean=true;
  laid:Boolean=true;
  other:Boolean=true;
  physicallydisabled:Boolean=true;
  resigned:Boolean=true;
  resignedcompany:Boolean=true;
  retired:Boolean=true;
  resignedself:Boolean=true;

  Contract(){
    this.contract=this.contract?false:true;
  }
  Termination(){
    this.termination=this.termination?false:true;
  }
  Deceased(){
    this.deceased=this.deceased?false:true;
  }
  Dismissed(){
    this.dismissed=this.dismissed?false:true;
  }
  Illness(){
    this.illness=this.illness?false:true;
  }
  IntegrityViolation(){
    this.integrity=this.integrity?false:true;
  }
  LaidOff(){
    this.laid=this.laid?false:true;
  }
  Other(){
    this.other=this.other?false:true;
  }
  PhysicallyDisabled(){
    this.physicallydisabled=this.physicallydisabled?false:true;
  }
  Resigned(){
    this.resigned=this.resigned?false:true;
  }
  ResignedCompany(){
    this.resignedcompany=this.resignedcompany?false:true;
  }
  ResignedSelf(){
    this.resignedself=this.resignedself?false:true;
  }
  Retired(){
    this.retired=this.retired?false:true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
