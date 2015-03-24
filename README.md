
# angular-seed

This is a fork of the [official angular-seed](https://github.com/angular/angular-seed) project, which serves as a skeleton for a typical [AngularJS](http://angularjs.org/) web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.

## Differences from the Official Seed

1. SASS Support
2. Follows [John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide)
3. Richer build process


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/eneuhauser/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/eneuhauser/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
client/                   --> Source files for client code
  app/                      --> all of the source files for the application
    components/               --> all app specific modules
      version/                  --> version related components
        version.js                --> version module declaration and basic "version" value service
        version.spec.js           --> "version" value service tests
        version.directive.js      --> custom directive that returns the current app version
        version.directive.spec.js --> version directive tests
        interpolate.filter.js     --> custom interpolation filter
        interpolate.filter.spec.js --> interpolate filter tests
    view1/                      --> the view1 view template and logic
      view1.html                  --> the partial template
      view1.js                    --> the controller logic
      view1.spec.js               --> tests of the controller
    view2/                      --> the view2 view template and logic
      view2.html                  --> the partial template
      view2.js                    --> the controller logic
      view2.spec.js               --> tests of the controller
    app.js                --> main application module
  content/              --> Contains main layout files
    index.html            --> app layout file (the main html template file of the app)
  public/               --> Contains any file that is publicly accessible    
    assets/             --> Contains site assets (e.g. images, fonts)
  styles/               --> Contains styles for the site
    app.scss            --> Main SCSS file. All other SCSS should be referenced in here
    _menu.scss          --> Contains style information for the menu
config/                   --> Contains configuration files
  config.js               --> Primary configuration file
gulp/                     --> Contains Gulp specific tasks
  assets.js               --> Tasks to manage assets
  clean.js                --> Tasks for cleaning
  html.js                 --> Tasks for managing HTML
  scripts.js              --> Tasks for managing JavaScript files
  serve.js                --> Tasks to serve the static files
  styles.js               --> Tasks for managing styles
  test.'s                 --> Tasks for running tests
tests/            --> Test information
  karma.conf.js         --> config file for running unit tests with Karma
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and integration tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `*.spec.js`.

You can run just the unit test `gulp test:unit` or both with `gulp test`.

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change. This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected. The project contains a predefined script to do this:

```
npm test
```


### Integration testing

The angular-seed app comes with integration tests, again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has special features for Angular applications.

* the configuration is found at `tests/protractor-conf.js`
* the end-to-end tests are found in `tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds correctly. You can run just the integration test `gulp test:integration` or both with `gulp test`.

In addition, since Protractor is built upon WebDriver we need to install this.  The gulp tasks automatically install this.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project. Now that the angular framework library code and tools are acquired through package managers (npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that don't require a backend server at all, we recommend serving the project files using a local webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  You can start this webserver with `gulp serve` or if you want it to automatically compile changes, `gulp watch`. Additionally, you can have it automatically reload your browser with `gulp watch:reload`.

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just configure your server to serve the files under the `dist/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `dist/` directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to your repository and execute scripts such as building the app or running tests. The angular-seed project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more instruction on how to do this.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
