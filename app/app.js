'use strict';

/**
 * @ngdoc overview
 * @name skillFinderApp
 * @description
 * # skillFinderApp
 *
 * Main module of the application.
 */

angular
  .module('skillFinderApp', [
    'ui.router',
    'ui.bootstrap',
    'angular-growl',
    'skillFinderApp.controllers',
    'skillFinderApp.services'
])
  .config(['$urlRouterProvider', 'growlProvider',
    function($urlRouterProvider,growlProvider) {
      $urlRouterProvider
        .otherwise('/home');

    growlProvider.globalTimeToLive(5000);
    }
  ]);
