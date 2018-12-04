import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, FormLoginComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
