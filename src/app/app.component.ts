import { Component } from '@angular/core';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseItem } from './model/courseItem.model';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze} from 'ngrx-store-freeze';
// import { AppState } from './store/models/app-state.model';
import { increment, decrement, reset } from '../app/state/action/course.actions';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ERP';
  data:any ="My first Data";
  courseItems$: any = [];
  count$: Observable<number>;
  
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  newData(event:any){
    debugger
    this.data = event;
  }

 
  ngOnInit(): void {
    // this.courseItems$ = this.store.select((store) => store.course);
  }

  
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  update(dataupdate:any){
  }
}
