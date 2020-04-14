module.exports = {
  mergeStrategy: {
    toSameBranch: ["master"],
  },
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['projects/ngx-uploadcare-widget'],
    packagesToPublish: ['dist/ngx-uploadcare-widget'],
  },
  buildCommand: 'npm run build:release'
};
