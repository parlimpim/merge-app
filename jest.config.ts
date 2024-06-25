module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "html"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
};
