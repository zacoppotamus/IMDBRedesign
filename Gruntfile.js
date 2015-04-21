module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass : {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        sass : {
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              'css/base.css': 'sass/base.scss'
            }
          }
        },
        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            html: {
                files: ['index.html', 'templates/**/*.html'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/main.js'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            uses_defaults: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['watch', 'sass', 'connect']);
};
