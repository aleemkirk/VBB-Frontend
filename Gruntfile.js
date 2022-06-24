module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			default : {
				src: ["**/*.ts", "!node_modules/**"]
			}
		},
	 	sass: {                              // Task
	    	dist: {                            // Target
	      		files: {                         // Dictionary of files
	        		'public/css/style.css': 'src/styles/style.scss'
	      		}
	    	}
	  	},
	  	postcss: {
        	options: {
				map: true,
				processors: [
					require('postcss-discard-comments'),
					require('cssnano')({autoprefixer: false}),
					require('autoprefixer')({browsers: 'last 5 versions'})
				]
        	},
        	dist: {
            	src: 'public/css/style.css'
        	}
    	},
	  	watch: {
		  	css: {
		    	files: '**/*.scss',
		    	tasks: ['sass', 'postcss'],
					options: {
						livereload: true,
					},
		  	}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-ts");

	grunt.task.registerTask('default',['watch']);
};
