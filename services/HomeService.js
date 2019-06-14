'use strict';

angular.module('skillFinderApp.services')
  .factory('HomeService', ['$http', 'Settings', function($http, Settings) {

    function getDomainInfo(domainName) {
      return $http.get(Settings.api.baseUrl + Settings.api.getDomains + '?employeeDomain=' + domainName);
    }

    return {
      getDomainInfo
    }

  }]);
