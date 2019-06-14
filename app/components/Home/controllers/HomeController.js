'use strict';

angular.module('skillFinderApp.controllers')
.controller('HomeController', ['$scope', '$state', 'HomeService', function($scope, $state, HomeService){

  function init(){
    $scope.landingPage = true;
    $scope.skillsPage = false;

      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: (target.offset().top - 70)
                  }, 1000, "easeInOutExpo");
                  return false;
              }
          }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      // $('#home').scrollspy({
      //     target: '#mainNav',
      //     offset: 100
      // });

      // Collapse Navbar
      var navbarCollapse = function() {
          if ($("#mainNav").offset().top > 100) {
              $("#mainNav").addClass("navbar-shrink");
          } else {
              $("#mainNav").removeClass("navbar-shrink");
          }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
      $scope.name ="spandana";
     
  }

  $scope.domains = ["FrontEnd", "Backend", "FullStack", "Manual Testing", "Automation Testing", "Management", "Project Management"];
  console.log($scope.domains,'items')
 
    $scope.properties = {
        items: 3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
       
    };

    $scope.goToDomainPage = function(domainName) {
      // $scope.landingPage = false;
      // $scope.skillsPage = true;
      $state.go('list', {domain: domainName})
    }

    // $scope.goToLandingPage = function() {
    //   $scope.landingPage = true;
    //   $scope.skillsPage = false;
    // }

  init();
}])
