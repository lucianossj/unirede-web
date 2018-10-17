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

  searchUser(frm: FormGroup){

    
  }

  update(frm: FormGroup){

    //console.log(frm.value);

    this.service.update(this.user).subscribe(response => {

      this.users.push(response);

      frm.reset();

    });

  }

}

