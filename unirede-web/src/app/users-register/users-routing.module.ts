import { UsersRegisterComponent } from "./users-register.component";
import { InsertUserComponent } from "./insert-user/insert-user.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";

const usersRoutes = [

    {path: 'users-register', component: UsersRegisterComponent, children: [

        {path: 'insert-user', component: InsertUserComponent},
        {path: 'update-user', component: UpdateUserComponent},
        {path: 'delete-user', component: DeleteUserComponent}

    ]}

];

@NgModule({

    imports:[RouterModule.forChild(usersRoutes)],
    exports:[RouterModule]

})

export class UsersRoutingModule{}