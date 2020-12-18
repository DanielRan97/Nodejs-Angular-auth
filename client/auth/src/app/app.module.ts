import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { EventComponent } from './event/event.component';
import { RegisterComponent } from './register/register.component';
import { SpaicelEventComponent } from './spaicelEvent/spaicel-event.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/services/token.interceptor';
import { AuthService } from './core/services/auth.service';
import { ApiService } from './core/services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventComponent,
    RegisterComponent,
    SpaicelEventComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,ApiService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
