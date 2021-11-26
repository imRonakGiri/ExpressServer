module.exports = function (grunt) {
  pkg: grunt.file.readJSON("package.json");
  grunt.initConfig({
    // For sass or css
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          // this is for sass to css
          "static/style.min.css": "public/sass/style.scss", // 'destination': 'source'
        },
      },
    },
    cssmin: {
      target: {
        files: {
          // this is css file minfication
          "static/style.min.css": "static/style.min.css",
        },
      },
    },
    // For Js
    concat: {
      js: {
        // This line will select all js file from public/js/
        src: ["public/js/*.js"],
        // This line define path to Create one Js File
        dest: "static/main.min.js",
      },
    },
    uglify: {
      t1: {
        files: {
          // This is for js file minfication
          "static/main.min.js": "static/main.min.js",
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ["static/index.html"],
      },
      js: {
        files: ["public/js/*.js"],
        tasks: ["concat", "uglify"],
      },
      css: {
        files: ["public/sass/*.scss"],
        tasks: ["sass", "cssmin"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", [
    "concat",
    "sass",
    "uglify",
    "cssmin",
    "watch",
  ]);
};
