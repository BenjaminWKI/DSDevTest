/*!
 * DSDevTest's Grunt File
 *@author: Benjamin Wong
 */

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //js: {
        //    compile: {
        //        // files: {'scripts.js':'tsscripts/tsscript.js'}
        //    }
        //},
        sass: {
            dist: {
                files: {
                    'style/main.css': '_scss/site.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
            //js: {
            //    files: ['scripts/*.js'],
            //    tasks: ['js']
            //}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 

    grunt.registerTask('default', ['sass']);

};