const path = require('path')

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
}
