module.exports = function (grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js'],
        less: {
            compile: {
                files: {
                    'build/css/compiled.css': [
                        'public/css/*.less'
                        ]
                }
            }
        },
        concat: {
            js: {
                files: {
                    'build/js/bundle.js': 'public/js/**/*.js'
                }
            }
        },
        uglify: {
            bundle: {
                files: {
                    'build/js/bundle.min.js': 'build/js/bundle.js'
                }
            }
        }
//        sprite:
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'less']); // register a default task alias

    grunt.registerTask('assets', ['concat:js', 'uglify:bundle']); // concatenate and minify
};