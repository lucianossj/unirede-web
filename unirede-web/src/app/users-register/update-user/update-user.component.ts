import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users: Array<any>;
  user: any;

  constructor(private service: UserService) { }

  ngOnInit() {

    this.user = {};

  }

  userLogin:string;

  searchUser(frm: FormGroup){

    this.service.search(frm).subscribe(data => this.user = data);

    console.log(this.user[0]);

    //this.userLogin = ;

  }

  update(frm: FormGroup){

    //console.log(frm.value);

    this.service.update(this.user).subscribe(response => {

      this.users.push(response);

      frm.reset();

    });

  }

}

