module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		watch: {
			files: [
				'public/stylesheets/app.css',
				'public/javascripts/app.js'
			],
			tasks: ['build']
		},
		uglify: {
			my_target: {
			  files: {
			    'public/javascripts/app.min.js': ['public/javascripts/app.js']
			  }
			}
		},
		cssmin: {
			compress: {
			    files: {
			      'public/stylesheets/app.min.css': [
			      	'public/stylesheets/normalize.css', 
			      	'public/stylesheets/app.css'
			      ]
			    }
			}
		},
		imagemin: {
		    dist: {
				files: [{
					expand: true,
					cwd: 'public/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/images/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('build', [
		'uglify', 
		'cssmin',
		'imagemin'
	]);
	grunt.event.on('watch', function(action, filepath) {
	  grunt.log.writeln(filepath + ' has ' + action);
	});
}