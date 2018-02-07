import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare class UcWidgetComponent implements AfterViewInit {
    publicKey: string;
    multiple: boolean;
    multipleMax: number;
    multipleMin: number;
    imagesOnly: boolean;
    previewStep: boolean;
    crop: boolean;
    imageShrink: string;
    clearable: boolean;
    tabs: string;
    inputAcceptTypes: string;
    preferredTypes: string;
    systemDialog: boolean;
    secureSignature: string;
    secureExpire: string;
    fileId: any;
    cdnBase: any;
    doNotStore: boolean;
    onUploadComplete: EventEmitter<any>;
    onChange: EventEmitter<any>;
    element: ElementRef;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
