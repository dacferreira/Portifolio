  'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('HomeController', function ($scope, $location, $anchorScroll) {
    var vm = this;
    vm.title = '</> ';  
    
    vm.GoToDiv = function(newHash){       
      if ($location.hash() !== newHash) {
        $location.hash(newHash);
      } else {
        $anchorScroll();
      }
    };
});