module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "requirejs"],
    files: [
      { pattern: "src/**/*", included: false }, // included: true : it includes script:src
      { pattern: "tests/scripts/index.js", included: true },
      { pattern: "tests/**/*", included: false }
    ],
    browsers: ["Chrome"],
    singleRun: true,
    autoWatch: false,
    logLevel: config.LOG_DEBUG,
      specReporter: {
        suppressPassed: false,
        suppressFailed: false,
        suppressSkipped: false
      },
      reporters: [
        "spec"
      ]
  });
};
