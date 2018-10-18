import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersURL = "http://localhost/unirede-api/users";

  constructor(private http: HttpClient) { }

  list(){

    return this.http.get<any[]>(`${this.usersURL}`);

  }

  //insert(user: any){

    //return this.http.post(this.usersURL, user);

    /*return this.http.post(
      this.usersURL,
      {user},
      {responseType: 'text'})*/

  //}

  confirmationString:string = "Usuário inserido!!!";
  isAdded: boolean = false;
  userObj:object = {};

  insert(user) {

    this.userObj = {
      "userLogin": user.login,
      "userPassword": user.userPassword
    }

    return this.http.post("http://localhost/unirede-api/users", this.userObj).subscribe((res:Response) => {
      this.isAdded = true;
    })

  }

  update(user: any){

    return this.http.put(this.usersURL, user);

  }

  id: string;

  search(frm: FormGroup){

    this.id = frm.get(`idUser`).value;

    return this.http.get<any[]>(`${this.usersURL}/`+this.id);

  }

}
