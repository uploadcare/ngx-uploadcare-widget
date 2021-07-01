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
    version: '2.0.3',
    name: 'ngx-uploadcare-widget',
    versionDate: '2021-07-01T09:29:33.690Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
