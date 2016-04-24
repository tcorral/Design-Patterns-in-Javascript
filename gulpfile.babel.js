var gulp = require('gulp');
var fs = require('fs');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

const excludeDirectories = ['node_modules', 'statics', '.git', '.idea', 'common'];

function processOnEachFolder(callback, directory = __dirname) {
  fs.readdir(directory, function (err, files) {
    for(let file of files) {
      if(excludeDirectories.indexOf(file) === -1) {
        let path = directory + '/' + file;
        fs.stat(path, function (err, stats) {
          if(stats.isDirectory()) {
            callback(path);
          }
        });
      }
    }
  });
}

gulp.task('clean', function () {
  var callback = function (path) {
    gulp.src(path, {read: false})
      .pipe(clean());
  };

  processOnEachFolder(function (path) {
    fs.stat(path + '/1', function (err, stats) {
      if(stats && stats.isDirectory) {
        processOnEachFolder(function (path) {
          callback(path + '/dist');
        }, path);
      } else {
        callback(path + '/dist');
      }
    });
  });
});

gulp.task('default', ['clean'], function () {
  function bundle(src, dest) {
    var bundler = browserify({
      entries: src,
      debug: true
    });
    bundler.transform(babelify);

    bundler.bundle()
      .on('error', function (err) { console.error(err); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify()) // Use any gulp plugins you want now
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  }

  function callback(path) {
    bundle( path + '/scripts/main.js', path + '/dist/scripts');
  }

  processOnEachFolder(function (path) {
    fs.stat(path + '/1', function (err, stats) {
      if(stats && stats.isDirectory) {
        processOnEachFolder(function (path) {
          callback(path);
        }, path);
      } else {
        callback(path);
      }
    });
  });
});
