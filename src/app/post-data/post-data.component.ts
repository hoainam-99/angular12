import { HttpServiceService } from './../Service/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServiceService) { }

  ngOnInit(): void {
    const payload = {
      body: 'some comment 4',
      postId: 4
    };
    this.httpServerService.postComments(payload).subscribe(data=> {
      console.log('payload ', data);
    });
  }

}
