var requireDir = function(dir, callback) {
    var aret = Array();
    fs.readdirSync(dir).forEach(function (library) {
      var isLibrary = library.split(".").length > 0 && library.split(".")[1] === 'js',
      libName = library.split(".")[0];
      if (isLibrary) {
          aret[libName] = requireWithoutModule(path.join(path.resolve(dir), library));
      }
    });

    if(callback) process.nextTick(function() {
        callback(null, aret);
    });
    return aret;
}

var requireDirGlobal = function(dir, callback) {
  var libraries = requireDir(dir);
  for (var key in libraries) {
    var library = libraries[key];
    global[key] = library;
  }
}

var requireWithoutModule = function(path, callback) {
    var data = fs.readFileSync(path);
    context = {}
    vm.runInNewContext(data, context, path);
    return context;
}

exports.requireDir = requireDir;
exports.requireDirGlobal = requireDirGlobal;
