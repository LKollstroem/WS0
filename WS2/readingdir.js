function readdir(path, options, callback) {
    callback = makeCallback(typeof options === 'function' ? options : callback);
    options = getOptions(options, {});
    path = toPathIfFileURL(path);
    validatePath(path);
  
    const req = new FSReqWrap();
    if (!options.withFileTypes) {
      req.oncomplete = callback;
    } else {
      req.oncomplete = (err, result) => {
        if (err) {
          callback(err);
          return;
        }
        getDirents(path, result, callback);
      };
    }
    binding.readdir(pathModule.toNamespacedPath(path), options.encoding,
                    !!options.withFileTypes, req);
  }