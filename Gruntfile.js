module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                src: 'lightgallery/lightgallery.js',
                dest: 'build/lightgallery.min.js'
            }
        },
        jshint: { all: ['lightgallery/lightgallery.js'] }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask(
        'default',
        [
            //'jshint',
            'uglify'
        ]
    );
};
