module.exports = {
  name: 'libs-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/libs/material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
