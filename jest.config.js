module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@exodus|@asamuzakjp|@csstools|jsdom|whatwg-url|whatwg-encoding|html-encoding-sniffer|data-urls|minipass-fetch|form-data|node-fetch)/)'
  ],
};
