import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface myData{
  success:boolean,
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedInStatus= true;

  setLoggedIn(value : boolean){
    this.LoggedInStatus=value
  }

  get isLoggedIn(){
    return this.LoggedInStatus
  }

  constructor(private http: HttpClient) { }

  getLogindetails(username,password){
  // to post the login data
   return this.http.post<myData>('dash',{
   username,
    password
  })
  //  }).subscribe(data => {
  //    console.log(data,"login details fetched")
  //  })
  }
}
