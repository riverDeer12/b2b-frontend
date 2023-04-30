import {DynamicDialogConfig} from 'primeng/dynamicdialog';

export const DialogFormConfig: DynamicDialogConfig = {
    autoZIndex: true,
    dismissableMask: true,
    closeOnEscape: true,
    transitionOptions: '200ms',
    style:{
        'width': '100%',
        'maxWidth': '500px'
    }
}

