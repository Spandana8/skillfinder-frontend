'use strict';

angular.module('skillFinderApp')
.config(function($stateProvider){
  $stateProvider
  .state('list',{
    url: '/list/:domain',
    templateUrl: 'app/components/Home/views/List.html',
    controller: 'ListController'
  })
} )
