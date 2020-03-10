var fs = require("fs");
var path = require("path");

var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
