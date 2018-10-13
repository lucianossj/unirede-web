import { UsersRegisterComponent } from "./users-register.component";
import { InsertUserComponent } from "./insert-user/insert-user.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const usersRoutes = [

    {path: 'users-register', component: UsersRegisterComponent, children: [

        {path: 'insert-user', component: InsertUserComponent}

    ]}

];

@NgModule({

    imports:[RouterModule.forChild(usersRoutes)],
    exports:[RouterModule]

})

export class UsersRoutingModule{}