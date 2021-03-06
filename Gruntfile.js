module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				includePaths: [
					// 把 compass-mixins 加到 sass 的 include path
					'node_modules/compass-mixins/lib'
				],
				outputStyle: 'compressed',
				encoding: 'utf-8'
			},
			dist: {
				// 用 grunt 展開檔案丟給 node-sass
				// ref: http://gruntjs.com/configuring-tasks#globbing-patterns
				files: [{
					expand: true,
					cwd: 'sass',
					src: '{,**/}*.scss',
					dest: 'stylesheets',
					ext: '.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass']);

};