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
    version: '2.0.0-alpha.1',
    name: 'ngx-uploadcare-widget',
    versionDate: '2020-04-10T15:55:06.505Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
