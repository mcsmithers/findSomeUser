module.exports = {
  name: 'ui-searchform',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-searchform',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
