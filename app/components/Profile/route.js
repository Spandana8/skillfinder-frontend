'use strict';

angular.module('skillFinderApp')
.config(function($stateProvider){
  $stateProvider
  .state('profile',{
    url: '/profile/:id',
    templateUrl: 'app/components/Profile/views/Profile.html',
    controller: 'ProfileController'
  })
} )
