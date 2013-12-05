'use strict';

//TODO receber somente hostname e porta para montar a tag script

var fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('phpreload', 'include live reload script', function() {
    var options = this.options({
      script: '',
      filepath: ''
    });

    var filepath = options.filepath;
    var script = options.script;

    // include reload script  
    var content = grunt.file.read(filepath);
    console.log(content.search(script));
    if (content.search(script) < 0) {
      content = content.replace('</body>', script + "\n</body>");
      grunt.file.write(filepath, content);
      grunt.log.writeln('script included in "' + filepath + '".');
    };
  });

  grunt.registerTask('phprmreload', 'remove live reload script', function() {
    var options = this.options({
      script: '',
      filepath: ''
    });

    var filepath = options.filepath;
    var script = options.script;

    // remove reload script  
    var content = grunt.file.read(filepath);
    content = content.replace('\n' + script, '');
    grunt.file.write(filepath, content);
    grunt.log.writeln('script removed in "' + filepath + '".');
  });

};
