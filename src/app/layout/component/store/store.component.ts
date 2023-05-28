import { Component,OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  
  categoryList : any = [];
  // isLoading: Observable<any>;

  constructor(private store: Store<any>, private httpService: HttpService){
  }


  spinner$: any;

  ngOnInit(){
    debugger
    this.loadCategory()
    this.spinner$  = this.store.pipe(select(state => state.spinner.isOn));
    console.log(this.spinner$)
    
  }
  
  loadCategory(){
    this.store.dispatch({ type: 'startSpinner' });
    this.httpService.getAllCategory().subscribe((result)=>{
      debugger
      console.log(result.category)
      result.category.forEach((element:any) => {
        this.categoryList.push(element)
      });
      this.store.dispatch({ type: 'stopSpinner' });
    })
  }
}
