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
    version: '2.0.1',
    name: 'ngx-uploadcare-widget',
    versionDate: '2020-04-14T12:33:53.574Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
