export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '3.0.0',
    name: 'ngx-uploadcare-widget',
    versionDate: '2021-07-01T10:01:44.091Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
