module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: ["index.js", "**/*.js", "!node_modules/**"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  verbose: true,
};