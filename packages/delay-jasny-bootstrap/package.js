
// package metadata file for Meteor.js

Package.describe({
    name: 'delay-jasny-bootstrap',  // http://atmospherejs.com/jasny/bootstrap
    version: '0.0.1',
    summary: 'Jasny Bootstrap (official): The missing components for your favorite front-end framework. fixed scrolling problem iphone ipad with newer build I hope',
    git: 'https://github.com/jasny/bootstrap.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.use('jquery', 'client');

    api.addFiles([
        'jasny-bootstrap.css',
        'jasny-bootstrap.js'
    ], 'client');
});