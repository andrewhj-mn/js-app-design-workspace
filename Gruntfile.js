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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['jshint', 'less']); // register a default task alias
};