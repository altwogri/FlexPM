angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginflexpm', {
        views: {
            app: {
                controller: 'app_loginflexpm',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginflexpm');
                }
            }
        }
    }).state('app.mytasks', {
        views: {
            app: {
                controller: 'app_mytasks',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytasks');
                }
            }
        }
    });
});