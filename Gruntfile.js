module.exports = function (grunt) {
  pkg: grunt.file.readJSON("package.json");
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "static/style.min.css": "public/sass/style.scss", // 'destination': 'source'
        },
      },
    },
    concat: {
      js: {
        src: ["public/js/*.js"],
        dest: "static/main.min.js",
      },
    },
    uglify: {
      t1: {
        files: {
          "static/main.min.js": "static/main.min.js",
        },
      },
    },
    cssmin: {
      target: {
        files: {
          "static/style.min.css": "static/style.min.css",
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.registerTask("default", ["concat", "sass", "uglify", "cssmin"]);
};
