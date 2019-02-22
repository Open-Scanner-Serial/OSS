module.exports = {
  roots: [
    "packages/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.{js}',
    '!**/node_modules/**',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};

