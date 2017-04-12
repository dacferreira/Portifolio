'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ui.bootstrap',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html',
        controller: 'HomeController as homeCtrl'
      })
      // .state('components', {
      //   url: '/components',
      //   templateUrl: '../views/components.html',
      //   controller: 'ComponentsController as componentsCtrl'
      // })
      // .state('infos', {
      //   url: '/infos',
      //   templateUrl: '../views/infos.html',
      //   controller: 'InfosController as infosCtrl'
      // })
      ;
  })
  .config(function ($firebaseRefProvider) {
        $firebaseRefProvider.registerUrl('https://portifolio-diogo.firebaseio.com');
  });
