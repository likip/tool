import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Component,OnInit, Input, AfterViewInit} from "@angular/core"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS" ,
    'Access-Control-Allow-Origin': '*'
  })
};

export class NgbdModalContent {
  @Input() name;
  
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent implements OnInit{
  title = 'HRM TOOL';

  constructor(private http:HttpClient,public activeModal: NgbActiveModal,private modalService: NgbModal){
  }

ngOnInit(){
let obs = this.http.get('http://hrmappscoreapi20190517034527.azurewebsites.net/api/v1.0/clientvalidation?clientName=aatral')
 obs.subscribe((response)=> console.log(response)) ;
 console.log("response");
}

}
