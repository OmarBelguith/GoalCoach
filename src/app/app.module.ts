import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { BsModalModule } from 'ng2-bs3-modal';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TodayComponent } from './components/today/today.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { YearlyComponent } from './components/yearly/yearly.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthService} from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TodosComponent } from './components/todos/todos.component';
import { CardComponent } from './components/card/card.component';
import {NgcFloatButtonModule} from 'ngc-float-button';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'daily', component: TodayComponent, canActivate:[AuthGuardService] },
  {path: 'weekly', component: WeeklyComponent, canActivate:[AuthGuardService]},
  {path: 'monthly', component:MonthlyComponent, canActivate:[AuthGuardService] },
  {path: 'yearly', component:YearlyComponent, canActivate:[AuthGuardService] },
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TodayComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    TodosComponent,
    CardComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgcFloatButtonModule,
    BsModalModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
