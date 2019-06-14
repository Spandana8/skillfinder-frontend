'use strict';
angular.module('skillFinderApp').constant('Settings', {
  api: {
    baseUrl: 'http://192.168.1.26:8080/api/v1',
    getDomains: '/getAllEmployees'
    
  },
  translate: {
    errorPrefix: 'SERVER.'
  }
})
