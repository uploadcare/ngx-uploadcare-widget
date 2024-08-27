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
    version: '4.0.2',
    name: 'ngx-uploadcare-widget',
    versionDate: '2024-08-27T07:23:04.176Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
