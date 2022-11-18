import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { AdminComponentsModule } from './components/admin-components/admin-components.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    ContratComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AdminComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
