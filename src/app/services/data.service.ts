import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  userDetails:any = {
    1000: { acno: 1000, username: 'amal', password: 123, balance: 1000000,transaction:[] },
    1001: { acno: 1001, username: 'ajith', password: 123, balance: 100000,transaction:[] },
    1002: { acno: 1002, username: 'subin', password: 123, balance: 1000,transaction:[] },
    1003: { acno: 1003, username: 'ajo', password: 123, balance: 10000,transaction:[] }

  }

  constructor() { }
  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails
    if (acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);
      
    return true

    }

  }
  login(acno:any,psw:any) {
    
    let userDetails = this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){

        this.currentUser=userDetails[acno]['username']
        this.currentAcno=acno
        return true

      }
      else{
        alert("Incorrect Password")
        return false
      }

    }
    else{
      alert("User Not Exist")
      return false
    }
    
  }
  deposit(acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails

    var amount=parseInt(amnt)  //to convert integer
    if (acnum in userDetails){
    if(pswrd==userDetails[acnum]['password']){
      userDetails[acnum]['balance']+=amount
      userDetails[acnum]['transaction'].push({type:'CREDIT',amount})
      return userDetails[acnum]['balance']
    }
    else{
      alert('Incorrect Password')
    }

    }
else{
  alert('User Not Exist')
  return false
}
  }

  withdraw(acnum1:any,pswrd1:any,amnt1:any){
    let userDetails=this.userDetails

    var amount=parseInt(amnt1)  //to convert integer
    if (acnum1 in userDetails){
    if(pswrd1==userDetails[acnum1]['password']){
      if(amount<userDetails[acnum1]['balance']){

      
      userDetails[acnum1]['balance']-=amount
      userDetails[acnum1]['transaction'].push({type:'DEBIT',amount})

      return userDetails[acnum1]['balance']
    }
    else{
      alert('Insufficent fund')
    }
  }
    else{
      alert('Incorrect Password')
    }
  }
  else{
    alert('User Not Exist')
    return false
  }
}
  getTransaction(acno:any){
   return this.userDetails[acno]['transaction']
}
}
