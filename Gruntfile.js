module.exports = function(grunt) {
  grunt.initConfig({
    webdriver: {
      options: {
          desiredCapabilities: {
              browserName: 'chrome'
          }
      },
      login: {
          tests: ['test/login/*.js']
      },
      form: {
          tests: ['test/questionnaire/*.js']
      }
      // ...
    },
  });

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);

}
