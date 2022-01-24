import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Hoài Nam';
  public age = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
