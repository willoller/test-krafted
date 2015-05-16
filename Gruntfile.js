module.exports = function(grunt) {

  grunt.initConfig({
    watch:{
      options: {
        reload: true,
        livereload : 35733
      },
      files:['index.html', 'style.scss'],
      tasks:['sass']
    },
    connect : {
      options : {
        hostname : 'localhost',
        port : 8800,
        livereload : 35733
      },
      myserver: {}
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          lineNumbers: true,
          loadPath: require('neat').includePaths,
          sourcemap: "none"
        },
        files: {
          'style.css': 'style.scss'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default',function(){
    grunt.task.run(['server']);
  });
  
  grunt.registerTask('server', [ 'connect', 'watch', 'sass']);
};
