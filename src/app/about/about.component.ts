import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName = 'user';
  public myColor = 'blue';
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

}
