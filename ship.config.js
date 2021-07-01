module.exports = {
  mergeStrategy: {
    toSameBranch: ["master"],
  },
  monorepo: {
    mainVersionFile: "package.json",
    packagesToBump: ["projects/ngx-uploadcare-widget"],
    packagesToPublish: ["dist/ngx-uploadcare-widget"],
  },
  buildCommand: () => "npm run build:release",
  beforeCommitChanges: ({ nextVersion, releaseType, exec, dir }) => {
    exec("npm run ts-appversion");
  },
  conventionalChangelogArgs: '-p angular -i CHANGELOG.md -s'
};
