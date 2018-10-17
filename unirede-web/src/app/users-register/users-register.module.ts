import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { UsersRegisterComponent } from './users-register.component';
import { InsertUserComponent } from './insert-user/insert-user.component';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from '../users-list/users-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
    imports: [
        RouterModule,
        UsersRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UsersRegisterComponent,
        InsertUserComponent,
        UsersListComponent,
        UpdateUserComponent,
        DeleteUserComponent
        
    ],
    providers: []
})

export class UsersModule { }