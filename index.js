var dir    = require('node-dir');
var rimraf = require('rimraf');
var async  = require('async');

var args = process.argv.slice(2);
var dirname = args.length && args[0];

if (!dirname) {
  throw new Error('I quit. No dirname. Supply the directory name to purge as the first argument. Something like node index ../dir_name_to_purge');
}

dir.subdirs(dirname, function(err, subdirs) {
  if (err) throw err;

  // node-dir orders deepest paths last.
  // we want to delete those first
  subdirs.reverse();

  // delete all subdirectories
  async.eachSeries(subdirs, function(subdir, callback) {
    console.log('Deleting ' + subdir);
    rimraf(subdir, callback);
  }, function(err) {
    if (err) throw err;

    // finally delete the directory itself
    console.log('Deleting ' + dirname);
    rimraf(dirname, function(err) {
      if (err) throw err;

      console.log('Purged ' + dirname + ' that had ' + subdirs.length + ' subdirectories.');
    });
  });
});