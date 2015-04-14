module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    outputStyle: 'compressed'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['sass/**/*.scss'],
                        dest: 'css/',
                        ext: '.css',
                    },
                ],
            }
        },
        compass : {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass'],
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
                files: ['js/izac.js'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            uses_defaults: {}
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['watch', 'connect']);
};
