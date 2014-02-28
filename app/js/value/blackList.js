'use strict';

angular.module('npm-plugin-browser')
    .value('blackList', {
      'gulp-browserify': 'use the browserify module directly',
      'gulp-requirejs': 'use the require.js module directly',
      'gulp-myth-css': 'duplicate of gulp-myth',
      'gulp-filesize': 'duplicate of gulp-size',
      'gulp-redust': 'duplicate of gulp-dust',
      'gulp-shell': 'duplicate of gulp-exec',
      'gulp-compile-js': 'combines other plugins',
      'gulp-module-system': 'does too much, use gulp-wrap-* modules',
      'gulp-wrap-define': 'duplicate of gulp-wrap-amd',
      'gulp-urequire': 'no documentation',
      'gulp-absolute': 'use gulp-filter and node\'s path module',
      'gulp-wintersmith': 'use the wintersmith module directly',
      'gulp-connect': 'use the connect module directly',
      'gulp-image-optimization': 'duplicate of gulp-imagemin',
      'gulp-bower': 'use the bower module directly',
      'gulp-ember-handlebars': 'duplicate of gulp-handlebars & too complex',
      'gulp-handlebars-michael': 'duplicate of gulp-handlebars',
      'gulpify': 'deprecated - use vinyl-source-stream instead',
      'gulp-web-modules': 'a grab bag of tasks/plugins - not a plugin itself',
      'gulp-jekyll': 'use Jekyll directly through gulp-spawn or ChildProcess.spawn()',
      'gulp-reduce': 'use AssetGraph directly',
      'gulp-imageoptim': 'should just be a vanilla node module',
      'gulp-typescript-compiler': 'duplicate of gulp-typescript',
      'gulp-ts': 'duplicate of gulp-typescript',
      'gulp-load': 'too magical, use require() or gulp-load-plugins',
      'gulp-spawn-mocha': 'duplicate of gulp-mocha',
      'gulp-swig-precompiler': 'duplicate of gulp-swig',
      'gulp-usemin': 'does too much. touches fs. non-responsive author. use gulp-useref.',
      'gulp-usemin2': 'does too much. touches fs. non-responsive author. use gulp-useref.',
      'gulp-npm': 'use the npm module directly or gulp-spawn',
      'duh': 'not a gulp plugin',
      'tc-gulp-boilerplate': 'not a gulp plugin',
      'gulp-blanket-mocha': 'use gulp-coverage',
      'gulp-js-prettify': 'duplicate of gulp-beautify',
      'gulp-using': 'duplicate of gulp-debug',
      'gulp-removelogs': 'fragile. use gulp-strip-debug',
      'gulp-download': 'use the request module',
      'gulp-php': 'use PHP directly through gulp-spawn or ChildProcess.spawn()',
      'gulp-apidoc': 'use the apidoc module',
      'gulp-wp-rev': 'not a gulp plugin',
      'gulp-continuous-concat': 'duplicate of gulp-concat',
      'gulp-dart2js': 'use Dart2JS directly through gulp-spawn or ChildProcess.spawn()',
      'gulp-spritesmith': 'duplicate of gulp.spritesmith',
      'gulp-filelog': 'duplicate of gulp-debug',
      'gulp-remove-lines': 'duplicate of gulp-replace',
      'gulp-ext-replace': 'duplicate of gulp-rename',
      'gulp-sass-graph': 'duplicate of gulp-sass',
      'gulp-pancakes': 'does nothing',
      'gulp-batch-replace': 'duplicate of gulp-replace',
      'gulp-mversion': 'duplicate of gulp-bump',
      'gulp-jshint-cached': 'duplicate of gulp-jshint',
      'gulp-twitter': 'not a gulp plugin',
      'gulp-print': 'duplicate of gulp-debug'
    });
