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
    version: '3.0.2',
    name: 'ngx-uploadcare-widget',
    versionDate: '2022-02-22T10:00:56.543Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
