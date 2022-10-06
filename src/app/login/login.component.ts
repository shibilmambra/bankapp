import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "your perfect banking partner"

  acno = ''
  psw =''


 

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login() {
    var acno = this.acno
    var psw = this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert('Login Success')
      this.router.navigateByUrl('dashboard')
    }


  //   let userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if(psw == userDetails[acno]['password']){
  //       alert("login successful")

  //       // redirection
  //       this.router.navigateByUrl('dashboard')

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("user dosen't exist")
  //   }
    
  // }
  // // login(a:any,b:any) {
    
    
  //   var acno = a.value
  //   var pass = b.value
  //   let userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if(pass == userDetails[acno]['password']){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("user dosen't exist")
  //   }
    
  // }

  // acnoChange(event: any) {
  //   this.acno = event.target.value;

  // }
  // passChange(event:any){
  //   this.pass= event.target.value
    
    
    
  }

}