import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsPagesModule} from './pages/scientists-pages.module';

@NgModule({
  imports: [
    CommonModule,
    ScientistsPagesModule
  ]
})
export class ScientistsModule {
}
