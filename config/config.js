var client = 'client',
    source = client + '/app',
    lib = 'bower_components',
    dist = 'dist',
    distLib = dist + '/assets';

var config = {
    isDevelopment: (process.env.NODE_ENV === 'development'),
    vendor: {
        scripts: {
            head: [
                lib + '/modernizer/modernizr.js'
            ],
            footer: [
                lib + '/angular/angular.js',
                lib + '/angular-route/angular-route.js'
            ]
        }
    },
    source: {
        path: source,
        lib: lib,
        styles: [client + '/styles/**/*.scss'],
        style: client + '/styles/app.scss',
        scripts: [source + '/**/*.js', '!' + source + '/**/*.spec.js'],
        assets: [client + '/public/**'],
        html: [client + '/content/**/*.html', source + '/**/*.html'],
        test: {
            unit: {
                conf: '/tests/karma.conf.js'
            },
            integration: {
                conf: 'tests/protractor.conf.js',
                source: ['tests/**/*.js', '!tests/*.conf.js']
            }
        }
    },
    dist: {
        path: dist,
        lib: distLib,
        styles: distLib,
        scripts: distLib,
        scriptName: 'app.js',
        assets: dist,
        html: dist
    },
    server: {
        port: 8080,
        index: 'index.html'
    }
};

module.exports = config;
module.exports.tasks = function () {
    return {
        clean: require('../gulp/clean.js')(this),
        scripts: require('../gulp/scripts.js')(this),
        styles: require('../gulp/styles.js')(this),
        assets: require('../gulp/assets.js')(this),
        html: require('../gulp/html.js')(this),
        serve: require('../gulp/serve.js')(this),
        test: require('../gulp/test.js')(this)
    }
};