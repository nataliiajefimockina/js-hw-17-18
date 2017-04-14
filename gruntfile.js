module.exports = function(grunt) {

  grunt.initConfig({
      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['js/src/*.js'],
          dest: 'js/dist/script.min.js'
        }
    },
    uglify: {
        dist: {
            src: ['js/dist/script.min.js'],
            dest: 'js/dist/script.min.js'
        }
    },
    cssmin: {
        with_banner: {
            options: {
                banner: '/* My minified CSS */'  //комментарий который будет в output файле.
            },
            files: {
                'css/dist/style.min.css' : ['css/src/*.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
            }
        }
    },
    watch: {
        scripts: {
            files: ['js/src/*.js'],
            tasks: ['concat', 'uglify']
        },
        css: {
            files: ['css/src/*.css'],
            tasks: ['cssmin']
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};
