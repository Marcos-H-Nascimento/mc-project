import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent,
    SettingsComponent,
    HomeComponent,
    LoginComponent,
    PricingComponent,
    EnterpriseComponent,
    ContactComponent,
    PagenotfoundComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
