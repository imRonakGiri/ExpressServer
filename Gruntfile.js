module.exports = function (grunt) {
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
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["sass"], ["concat"]);
};
