import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UserService } from '../../user.service';

@Component({
  selector: 'delete-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {

  users: Array<any>;
  user: any;

  constructor(private service: UserService) { }

  ngOnInit() {

    this.user = {};

  }

  insert(frm: FormGroup){

    console.log(frm.value);

    this.service.insert(this.user)/*.subscribe(response => {

      this.users.push(response);

      frm.reset();

    })*/;

  }

}
