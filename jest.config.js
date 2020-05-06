module.exports = {
  setupFilesAfterEnv: ['./tests/testSetup.ts'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
}
