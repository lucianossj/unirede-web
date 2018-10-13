import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { UsersRegisterComponent } from './users-register/users-register.component';


//import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users-register', component: UsersRegisterComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 