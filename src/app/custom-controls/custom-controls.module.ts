import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {FileUploadModule} from 'primeng/fileupload';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [FileUploaderComponent],
    imports: [
        CommonModule,
        FileUploadModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FileUploaderComponent
    ]
})
export class CustomControlsModule {
}
