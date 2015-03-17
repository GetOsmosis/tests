module.exports = function(grunt) {
  grunt.initConfig({
    webdriver: {
      options: {
          desiredCapabilities: {
              browserName: 'chrome'
          }
      },
      login: {
          tests: ['test/spec/login/*.js'],
          options: {
              // overwrite default settings
              desiredCapabilities: {
                  browserName: 'firefox'
              }
          }
      },
      form: {
          tests: ['test/spec/form/*.js']
      }
      // ...
    },
  });

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);

}
