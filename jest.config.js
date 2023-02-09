module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "tsx",
    "jsx"
  ],
  transform: {
    "^.+\\.(t|j)s$": 'ts-jest',
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    "**/*.(t|j)s",
    '^.+\\.(t|j)sx?$',
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(test).[jt]s?(x)',
    "**/.*\\.spec\\.ts$",
  ],
  testPathIgnorePatterns: [
    '/.vscode/',
    '/dist/',
    '/.next/',
    '/node_modules/',
    'src/client/public/*'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
};
