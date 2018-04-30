import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:any;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getUserPhoto());

  }

}
