module.exports = function(grunt) {
    grunt.initConfig({
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'lightgallery/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/'                  // Destination path prefix
                }]
            }
        },
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
            'uglify',
            'imagemin'
        ]
    );
};
