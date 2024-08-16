module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  testResultsProcessor: 'jest-sonar-reporter',
};
