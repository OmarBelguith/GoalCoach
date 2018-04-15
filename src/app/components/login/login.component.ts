import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signInWithGoogle() {
    console.log('here')
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['/'])
      })
    .catch((err) => console.log(err));
  }


}
