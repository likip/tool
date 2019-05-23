
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Component,EventEmitter} from "@angular/core"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS" ,
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try';

  constructor(private http:HttpClient){
  
  }

ngOnInit(){
let obs = this.http.get('http://hrmappscoreapi20190517034527.azurewebsites.net/api/v1.0/clientvalidation?clientName=aatral')
 obs.subscribe((response)=> console.log(response)) ;
 console.log("response");
//  console.log(response);
console.log("Api connected");
}

}
