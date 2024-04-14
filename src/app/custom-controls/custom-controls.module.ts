import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {FileUploadModule} from 'primeng/fileupload';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateButtonComponent} from "./translate-button/translate-button.component";

@NgModule({
    declarations: [
        FileUploaderComponent,
        TranslateButtonComponent
    ],
    imports: [
        CommonModule,
        FileUploadModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FileUploaderComponent,
        TranslateButtonComponent
    ]
})
export class CustomControlsModule {
}
