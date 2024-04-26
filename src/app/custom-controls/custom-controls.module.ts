import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateButtonComponent} from "./translate-button/translate-button.component";
import {DocumentUploaderComponent} from './document-uploader/document-uploader.component';
import {ProfilePictureComponent} from "./profile-picture/profile-picture.component";

@NgModule({
    declarations: [
        ProfilePictureComponent,
        TranslateButtonComponent,
        DocumentUploaderComponent
    ],
    imports: [
        CommonModule,
        FileUploadModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ProfilePictureComponent,
        TranslateButtonComponent,
        DocumentUploaderComponent
    ]
})
export class CustomControlsModule {
}
