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
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['*.spec.js']
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask("default", ["run"]);
  grunt.registerTask("compile", ["ts"]);
  grunt.registerTask("test", ["ts", "mochaTest"])
  grunt.registerTask("run", ["ts", "execute"])
};
