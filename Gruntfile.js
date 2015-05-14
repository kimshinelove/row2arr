'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jscs: {
      src: "index.js",
      options: {
        config: ".jscsrc"
      }
    },
    mochacli: {
      options: {
        reporter: 'nyan',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      js: {
        files: '<%= jscs.src %>',
        tasks: ['jscs', 'mochacli']
      },
      test: {
        files: 'test/test.js',
        tasks: ['jscs', 'mochacli']
      }
    }
  });

  grunt.registerTask('default', ['jscs', 'mochacli']);
};
