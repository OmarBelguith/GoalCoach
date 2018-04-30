import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  cards:any
  constructor() { 
    this.cards = ['1'];
  }

  ngOnInit() {
  }
  addCard(){
    this.cards.push('');
  }
}
