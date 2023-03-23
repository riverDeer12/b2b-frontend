import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersHomeComponent} from './users-home/users-home.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UsersComponentsModule} from '../components/users-components.module';


@NgModule({
    declarations: [
        UsersHomeComponent,
        UserCreateComponent,
        UserEditComponent
    ],
    imports: [
        CommonModule,
        UsersComponentsModule
    ],
    exports: [
        UsersHomeComponent,
        UserCreateComponent,
        UserEditComponent
    ]
})
export class UsersPagesModule {
}
