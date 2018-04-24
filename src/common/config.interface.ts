export interface Config {
  publicKey?: string;
  multiple?: boolean;
  multipleMax?: number;
  multipleMin?: number;
  imagesOnly?: boolean;
  previewStep?: boolean;
  crop?: any;
  imageShrink?: string;
  clearable?: boolean;
  tabs?: string;
  inputAcceptTypes?: string;
  preferredTypes?: string;
  systemDialog?: boolean;
  secureSignature?: string;
  secureExpire?: string;
  value?: string;
  cdnBase?: string;
  doNotStore?: boolean;
}
