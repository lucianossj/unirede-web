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

  insert(user: any){

    //return this.http.post(this.usersURL, user);

    return this.http.post(
      this.usersURL,
      {user},
      {responseType: 'text'})

  }

  update(user: any){

    return this.http.put(this.usersURL, user);

  }

  search(){

    //return this.http.get<any[]>(`${this.usersURL}`);

  }

}
