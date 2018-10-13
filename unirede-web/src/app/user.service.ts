import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersURL = "http://localhost/unirede-api/users";

  constructor(private http: HttpClient) { }

  list(){

    return this.http.get<any[]>(`${this.usersURL}`);

  }

}