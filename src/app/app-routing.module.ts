import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { LoginComponent } from './pages/login/login.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'enterprise', component: EnterpriseComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
