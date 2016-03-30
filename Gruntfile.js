module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
        options: {
            module: "commonjs",
            moduleResolution: "node"
        }
      }
    },
    execute: {
        default: {
            src: ['index.js']
        }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-execute');
  
  grunt.registerTask("default", ["ts"]);
  grunt.registerTask("compile", ["ts"]);
  grunt.registerTask("run", ["ts", "execute"])
};
