import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  constructor(private httpClient: HttpClient) { }

  public getComments():Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOption);
  }

  public postComments(payload: any):Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post<any>(url, payload,  this.httpOption);
  }

  public getRandomUsers(n: number = 1):Observable<any>{
    const url = `${this.REST_API_SERVER_RANDOM_USERS}` + n;
    console.log(url);
    return this.httpClient.get<any>(url, this.httpOption);
  }
}
