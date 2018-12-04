import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormLoginComponent } from './user/form-login/form-login.component';

import {  } from './document/form-prestamo/form-prestamo.component';
import {  } from './document/list-prestamo/list-prestamo.component';


import {  DocumentModule } from './document/document.module';
import { ParameterModule } from './parameter/parameter.module';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    FormLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentModule,
    ParameterModule,
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
