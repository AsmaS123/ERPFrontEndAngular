import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { counterReducer , updateData,updateDataReducer} from '../app/state/reducer/course.reducer'
import { StoreModule, MetaReducer } from '@ngrx/store';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/component/home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './layout/component/productdetails/productdetails.component';
import { StoreComponent } from './layout/component/store/store.component';
import { CheckoutComponent } from './layout/component/checkout/checkout.component';
import { HttpRequestInterceptor ,httpInterceptorProviders} from './services/HttpRequestInterceptor';
import { reducer } from '../app/state/reducer/spinner.reducer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { CartComponent } from './layout/component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    ProductdetailsComponent,
    StoreComponent,
    CheckoutComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer,data: updateData, spinner: reducer }),
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' })
  ],
  providers: [httpInterceptorProviders,provideStore()],
  bootstrap: [AppComponent]
})
export class AppModule { }
