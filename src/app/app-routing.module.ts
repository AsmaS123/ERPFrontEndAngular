import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './layout/component/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { ProductdetailsComponent } from './layout/component/productdetails/productdetails.component';
import { StoreComponent } from './layout/component/store/store.component';
import { CheckoutComponent } from './layout/component/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'layout', component: LayoutComponent ,
    children: [
      {path: '', component: DashboardComponent},
      // {path: 'dashboard', component: DashboardComponent},
      {path: 'product', component: ProductdetailsComponent},
      {path: 'store', component: StoreComponent},
      {path: 'checkout', component: CheckoutComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
