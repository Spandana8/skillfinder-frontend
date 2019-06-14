'use strict';

angular.module('skillFinderApp')
.config(function($stateProvider){
  $stateProvider
  .state('home',{
    url: '/home',
    templateUrl: 'app/components/Home/views/Home.html',
    controller: 'HomeController'
  })
} )
