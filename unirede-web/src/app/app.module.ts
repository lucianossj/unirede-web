import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users-register/users-register.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //UsersListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    UsersModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
