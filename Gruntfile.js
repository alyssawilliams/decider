'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/styles.css': 'css/sass/main.scss'
				},
			},
		},
		pug: {
			compile: {
				options: {
					data: {
						debug: false
					},
					pretty: true,
				},
				files: {
					'index.html': ['index.pug']
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['css/sass/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['js/**.js'],
			},
			html: {
				files: ['*.html', 'templates/*.html'],
			},
			pug: {
				files: ['*.pug'],
				tasks: ['pug']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};