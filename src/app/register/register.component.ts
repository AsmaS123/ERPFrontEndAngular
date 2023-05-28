import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private httpservice: HttpService,private router: Router){}

  signupForm = new FormGroup({   
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    contactNo : new FormControl(''),
    country : new FormControl(''),
    state : new FormControl(''),
    address : new FormControl(''),
    city : new FormControl(''),
    pinCode : new FormControl(''),
    nominee : new FormControl(''),
    dateTime : new FormControl("2023-02-08 07:28:07.765")
  });

  onSignup(){
    let data = this.signupForm.value;
    alert(JSON.stringify(data))
    this.httpservice.postRegister(data).subscribe(result=>{
      this.router.navigate(['/login'])
      debugger
      console.log(result)
    })
  }

}
