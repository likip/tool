import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,private router: Router) { }

  ngOnInit() {
  }

  login(event){
    event.preventDefault()
    console.log(event);
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value

    this.Auth.getLogindetails(username,password).subscribe(data => {
      if(data.success){  //data.success fetchs the success alert of login
this.router.navigate(['admin'])
      }else{
        window.alert("invalid crendentials" + data.message);//data.message fetchs the error type message
      }
    })

    console.log(username,password);

}

}