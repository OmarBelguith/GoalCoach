import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote:any;
  randNum: Number;
  constructor(private http: HttpClient, public authService: AuthService) { }

  ngOnInit() {
    this.http.get('https://talaikis.com/api/quotes/random/').subscribe(data=>{this.quote = data; console.log(data)}, err =>{console.log(err);})
    this.randNum = Math.floor(Math.random()* 100)+100
  }

}
