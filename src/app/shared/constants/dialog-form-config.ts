import {DynamicDialogConfig} from 'primeng/dynamicdialog';

export const DialogFormConfig: DynamicDialogConfig = {
    autoZIndex: true,
    dismissableMask: true,
    closeOnEscape: true,
    transitionOptions: '200ms',
    style: {
        minWidth: '800px',
        maxWidth: '1000px',
        maxHeight: '800px'
    }
}
