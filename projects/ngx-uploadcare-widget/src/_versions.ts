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
    version: '3.0.1',
    name: 'ngx-uploadcare-widget',
    versionDate: '2021-07-01T10:36:24.418Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
