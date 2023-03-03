import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsHomeComponent} from './organizations-home/organizations-home.component';


@NgModule({
  declarations: [
    OrganizationsHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrganizationsHomeComponent
  ]
})
export class OrganizationsPagesModule {
}
