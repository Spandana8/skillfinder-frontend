'use strict';

angular.module('skillFinderApp')
.config(function($stateProvider){
  $stateProvider
  .state('list',{
    url: '/list/:domain',
    templateUrl: 'app/components/List/views/List.html',
    controller: 'ListController'
  })
} )
