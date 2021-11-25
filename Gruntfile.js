module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ["public/js/*.js"],
        dest: "static/main.js",
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-concat");
};
