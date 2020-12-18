import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpaicelEventComponent } from './spaicelEvent/spaicel-event.component';


const routes: Routes = [
  {path: '', component : EventComponent  , pathMatch: 'full'},
  {path: 'auth/login', component : LoginComponent  , pathMatch: 'full'},
  {path: 'auth/register', component: RegisterComponent  , pathMatch: 'full'},
  {path: 'events/guests', component: EventComponent  , pathMatch: 'full'},
  {path: 'events/special', component: SpaicelEventComponent ,canActivate:[AuthGuard], pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
