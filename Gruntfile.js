module.exports=function(grunt){
grunt.initConfig({ 

uglify:
{
my_target:{
files:{
  'dest/output.min.js': ['test/*.js', 'app.js']
}
}
},

jshint:
{

all:
  ['Gruntfile.js','test/*.js', 'app.js']

},
   
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/*.js']
      }
    }

});


grunt.loadNpmTasks('grunt-contrib-clean');

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-mocha-test');
grunt.registerTask('default',['uglify','jshint','mochaTest']);
};



