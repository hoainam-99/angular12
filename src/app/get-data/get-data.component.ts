import { HttpServiceService } from './../Service/http-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  constructor (private httpServerService: HttpServiceService){}

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe(data => {
      console.log('data ', data);
    });

    this.httpServerService.getRandomUsers(5).subscribe(data => {
      console.log('Random User ', data.results);
    });
  }

}
