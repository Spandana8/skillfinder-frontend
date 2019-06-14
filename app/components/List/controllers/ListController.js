'use strict';

angular.module('skillFinderApp.controllers')
.controller('ListController', ['$scope', '$state', '$stateParams', 'HomeService', function($scope, $state, $stateParams, HomeService){

  function init(){
   $scope.lists = window.list;
   console.log(window.list,'list');
   
  }





  init();
}])
