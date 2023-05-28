import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private httpservice: HttpService,private router: Router ){}

  loginForm = new FormGroup({   
    email : new FormControl(''),
    password : new FormControl(''),
  })

  onLogin(){
    let data = this.loginForm.value;
    // alert(JSON.stringify(data))
    this.router.navigate(['/layout'])
    // this.httpservice.postLogin(data).subscribe(result=>{
    //   localStorage.setItem('token', result.token)
    //   this.router.navigate(['/layout'])
    //   debugger
    //   console.log(result)
    // })
  }
}
