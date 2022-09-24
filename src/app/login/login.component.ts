import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim=`Your perfect banking partner`
  acnt=`enter your Account number`

  acno=''
  psw=''


  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:10000},
    1001:{acno:1001,username:"anu",password:123,balance:20000},
    1002:{acno:1002,username:"joyal",password:123,balance:15000},
    1003:{acno:1003,username:"anaga",password:123,balance:10000}
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  login(){
    var acnum=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if (psw==userDetails[acnum]['passsword']){
        alert('login sucess')
      }
      else{
        alert('Invalid password')
      }

    }
    else{
      alert('user not exist or incorrect ac number')
    }
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    }
    pswChange(event:any){
      this.psw=event.target.value
      console.log(this.psw);
      
    }

}
