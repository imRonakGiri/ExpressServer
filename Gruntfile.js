module.exports = function (grunt) {
  pkg: grunt.file.readJSON("package.json");
  grunt.initConfig({
    sass: {
      // Task
      dist: {
        // Target
        options: {
          // Target options
          style: "expanded",
        },
        files: {
          // Dictionary of files
          "static/style.css": "public/sass/style.scss", // 'destination': 'source'
        },
      },
    },
    concat: {
      js: {
        src: ["public/js/*.js"],
        dest: "static/main.js",
      },
    },
    uglify: {
      t1: {
        files: {
          "static/main.min.js": "static/*.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["concat", "sass", "uglify"]);
};
