module.exports = {
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.stories.tsx'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  testRegex: '\\.spec\\.(ts|tsx)$',
  moduleFileExtensions: ['js', 'ts', 'tsx']
};
