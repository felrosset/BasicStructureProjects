module.exports = function(grunt) {

    grunt.initConfig({

    less: {
        development: {
          options: {
            paths: ['assets/css/']
          },
          files: {
            'assets/css/style.css' :          
            'assets/less/style.less'               
          }
        }
      }, // less

      watch: {
        scripts: {
          files: ['**/*.css','**/*.less'],
          tasks: ['less','cssmin', 'uglify', 'watch'],
          options: {
            spawn: true,
          }
        }
      }, // watch

      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['*.css', '!*.min.css'],
            dest: 'assets/css/min',
            ext: '.min.css'
          }]
        }
      }, //cssmin

      uglify: {
        target: {
          files: [{
            expand: true,
            cwd: 'assets/js',
            src: ['*.js', '!*.min.js'],
            dest: 'assets/js/min',
            ext: '.min.css'
          }]
        }
      } //uglify
    }); 
  
    // Load the plugins tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Init tasks.
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'watch']);
  
  };