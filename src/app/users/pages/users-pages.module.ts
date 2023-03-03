import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersHomeComponent} from './users-home/users-home.component';


@NgModule({
  declarations: [
    UsersHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersHomeComponent
  ]
})
export class UsersPagesModule {
}
