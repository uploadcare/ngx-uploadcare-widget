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
    version: '4.0.1',
    name: 'ngx-uploadcare-widget',
    versionDate: '2024-08-08T16:14:55.388Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
