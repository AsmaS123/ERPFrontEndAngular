import { FooterComponent } from './footer/footer.component';
import { Component,OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private httpservice: HttpService,private router: Router ){
    debugger
    this.httpservice.getCartDetails().subscribe((data)=>{
      if((data.cart).length>0){
        (data.cart).forEach((element:any) => {
            this.cartList.push(element);
        });
        console.log(this.cartList)
      }
    })
  }
  cartList:any = [];

  ngOninit(){
    debugger
    this.httpservice.getCartDetails().subscribe((data)=>{
      if((data.cart).length>0){
        (data.cart).forEach((element:any) => {
            this.cartList.push(element);
        });
      }
    })
  }
}
