import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TodayComponent } from './components/today/today.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { YearlyComponent } from './components/yearly/yearly.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'daily', component: TodayComponent },
  {path: 'weekly', component: WeeklyComponent},
  {path: 'monthly', component:MonthlyComponent },
  {path: 'yearly', component:YearlyComponent },
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
