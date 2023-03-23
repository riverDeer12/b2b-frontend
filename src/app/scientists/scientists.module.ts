import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsPagesModule} from './pages/scientists-pages.module';
import { ScientistsComponent } from './scientists.component';

@NgModule({
  imports: [
    CommonModule,
    ScientistsPagesModule
  ],
  declarations: [
    ScientistsComponent
  ]
})
export class ScientistsModule {
}
