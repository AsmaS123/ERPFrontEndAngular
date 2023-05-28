import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private store: Store<any>, private httpService: HttpService){
  }

  spinner$: any;
  productList :any = [];

  ngOnInit(){
    debugger
    this.loadProducts()
    this.spinner$  = this.store.pipe(select(state => state.spinner.isOn));
    console.log(this.spinner$)
    
  }

  loadProducts(){
    this.httpService.getAllProducts().subscribe((result)=>{
      this.productList = result.productprice;
      console.log(result.productprice)
    })
  }
}
