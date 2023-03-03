import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsHomeComponent} from './scientists-home/scientists-home.component';
import {ScientistsComponentsModule} from '../components/scientists-components.module';

@NgModule({
  declarations: [
    ScientistsHomeComponent
  ],
  imports: [
    CommonModule,
    ScientistsComponentsModule
  ],
  exports:[
    ScientistsHomeComponent
  ]
})
export class ScientistsPagesModule {
}
