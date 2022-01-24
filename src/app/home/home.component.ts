import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Hoài Nam';
  public age = 10;
  public traiCay = [
    {
      name: "Xoài",
      price: 12,
      sale: true
    },{
      name: "Cam",
      price: 15,
      sale: false
    },{
      name: "Bưởi",
      price: 20,
      sale: true
    },{
      name: "Nho",
      price: 40,
      sale: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public resetName(): void{
    this.name = '';
  }
}
