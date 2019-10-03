module.exports = {
  norpc: true,
  port: 8777,
  copyPackages: ['openzeppelin-solidity'],
  testCommand: 'node ../node_modules/.bin/truffle test --network coverage',
  deepSkip: true,
  skipFiles: ['external', 'flat']
};