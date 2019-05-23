import { Component, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, Sort } from '@angular/material';

export interface Personaldetails {
  person: string
}

export interface contactdetails{
  contact:string
}

const personalfields: Personaldetails[] = [
  { person: 'Employee Id' },
  { person: 'Employee Last Name'},
  { person: 'Employee First Name' },
  { person: 'Employee Middle Name' },
  { person: 'Date of Birth' },
  { person: 'Nationality' },
  { person: 'Gender' },
  { person: 'Marital Status' },
  { person: 'Driver License Number' },
  { person: 'License Expiry Date' },
  { person: 'Other Id' },
]

const contactfields:contactdetails[]= [
  {contact:'Address'},
  {contact:'Home Telephone'},
  {contact:'Mobile'},
  {contact:'Work Telephone'},
  {contact:'Work Email'},
  {contact:'Other Email'},
]

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})

export class EditreportComponent  {

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

  columns = ['person', 'remove'];
  dataSource: MatTableDataSource<Personaldetails>;

  column =['contact','delete']
  nextSource :MatTableDataSource<contactdetails>;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(personalfields.slice());
    this.nextSource=new MatTableDataSource(contactfields.slice());
  }

  removeAll() {
    this.dataSource.data = [];
  }

  deleteAll(){
    this.nextSource.data=[];
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice( index, 1);

    this.dataSource.data = data;
  }

  deleteAt(index:number){
    const dat=this.nextSource.data;
    dat.splice(index,1);
    this.nextSource.data =dat;
  }

}
