import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsPagesModule} from './pages/scientists-pages.module';
import {ScientistsComponent} from './scientists.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ScientistsRoutes} from './scientists.routing';
import {DialogService} from 'primeng/dynamicdialog';

@NgModule({
    declarations: [
        ScientistsComponent
    ],
    imports: [
        CommonModule,
        ScientistsPagesModule,
        RouterModule.forChild(ScientistsRoutes),
        TranslateModule,
        SharedModule
    ],
    providers:[
        DialogService
    ]

})
export class ScientistsModule {
}
