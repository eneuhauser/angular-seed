'use strict';
var del = require('del');

module.exports = function (config) {
    return function (callback) {
        /** Based on this recipe: https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md */
        del([config.dist.path], callback);
    };
};
