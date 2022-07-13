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
    version: '4.0.0',
    name: 'ngx-uploadcare-widget',
    versionDate: '2022-07-13T13:40:06.757Z',
    description: 'Angular 2+ wrapper for Uploadcare Widget',
};
export default versions;
