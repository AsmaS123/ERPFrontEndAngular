import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private httpservice: HttpService,private router: Router ){
  }

  @Input() cartDetails:any;  
  @Output() getResponse = new EventEmitter;  
  cartList:any = [];

  onLogOut(){
    // this.httpservice.logOut().subscribe(result=>{
      this.router.navigate(['/login'])
      // console.log(result)
    // })
  }
}


  
      // this.httpservice.getCartDetails().subscribe((data)=>{
    //   // this.cartList= [...this.cartList, data.cart]
    //   if((data.cart).length>0){
    //     (data.cart).forEach((element:any) => {
    //         this.cartList.push(element);
    //     });
    //   }
    // })



  // cartList:any = [{image: "./assets/images/product01.png", name:"PRODUCT NAME GOES HERE",price: "$980.00",qty:"1x"},
  //                 {image: "./assets/images/product02.png", name:"PRODUCT NAME GOES HERE",price: "$1980.00",qty:"3x"},
  //                 {image: "./assets/images/product03.png", name:"PRODUCT NAME GOES HERE",price: "$180.00",qty:"2x"},
  //                 {image: "./assets/images/product04.png", name:"PRODUCT NAME GOES HERE",price: "$280.00",qty:"3x"}
  //                 ];