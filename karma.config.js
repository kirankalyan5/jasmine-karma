module.exports(function(config){
	config.set({
		basePath: "",
		frameworks: ["jasmine", "requirejs"],
		files: [
			{ pattern: "src/**/*.js", included: false }, // included: true : it includes script:src
			{ pattern: "tests/**/*.js", included: false },
		],
		browsers: ['Chrome'],
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
});