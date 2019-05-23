import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-workshift',
  templateUrl: './workshift.component.html',
  styleUrls: ['./workshift.component.css']
})
export class WorkshiftComponent{
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
  workshifts:Boolean=true;
  addworkshifts(){
    this.workshifts=this.workshifts?false:true;
  }
  constructor() { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Testemp 2613' },
      { item_id: 2, item_text: 'Shruthi A' },
      { item_id: 3, item_text: 'Archana Chacko' },
      { item_id: 4, item_text: 'AATRAL ADMIN DR' },
      { item_id: 5, item_text: 'Gayathri G V' },
      { item_id: 6, item_text: 'Jerome Jesudas J' },
      { item_id: 7, item_text: 'Hitesh K' },
      { item_id: 8, item_text: 'Mukka Mehar Kumar' },
      { item_id: 9, item_text: 'Manaswini Swain' },

    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 9,
      allowSearchFilter: true
    };
  }
  
  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
