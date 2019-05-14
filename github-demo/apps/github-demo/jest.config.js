module.exports = {
  name: "github-demo",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/github-demo/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
