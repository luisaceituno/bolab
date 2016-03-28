module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task(s).
  grunt.registerTask('default', 'Testing task', function() {
      grunt.log.write('This task is running...').ok();
  });
};
