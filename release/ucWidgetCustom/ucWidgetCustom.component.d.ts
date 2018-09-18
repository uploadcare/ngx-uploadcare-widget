import { EventEmitter } from '@angular/core';
export declare class UcWidgetCustomComponent {
    onUploadComplete: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onProgress: EventEmitter<any>;
    publicKey: string;
    multiple: boolean;
    multipleMax: number;
    multipleMin: number;
    imagesOnly: boolean;
    previewStep: boolean;
    crop: any;
    imageShrink: string;
    clearable: boolean;
    tabs: string;
    inputAcceptTypes: string;
    preferredTypes: string;
    systemDialog: boolean;
    secureSignature: string;
    secureExpire: string;
    value: string;
    cdnBase: string;
    doNotStore: boolean;
    validators: any[];
    private dialog;
    openDialog(): void;
    reject(): void;
}
