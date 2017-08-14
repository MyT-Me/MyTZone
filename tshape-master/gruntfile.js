module.exports = function (grunt){
	grunt.loadNpmTasks('gunt-contrib-uglify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify:{
			t1:{
				files:{
					'/Users/sanjeedha/WebstormProjects/untitled/all.min.js':['/Users/sanjeedha/WebstormProjects/untitled/app/app.js','/Users/sanjeedha/WebstormProjects/untitled/app/app1.js']
				}
			}
		}
	})
}