"use strict";
var gutil = require("gulp-util");
var through = require("through2");

module.exports = function (opts) {
    opts = opts || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {

            cb(null, file);

            return;

        }

        if (file.isStream()) {

            cb(new gutil.PluginError("gulp-download-github-releases", "Streaming not supported"));

            return;

        }

        try {

            this.push(file);

        } catch (err) {

            this.emit("error", new gutil.PluginError("gulp-download-github-releases", err));

        }

        cb();
    });
};
