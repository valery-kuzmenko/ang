'use strict';

angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
]);
// route params are available inside controller with $routeParams.lastname
angular.module('myApp').config(function($routeProvider, $locationProvider){
    $routeProvider.when('/view1', {
	controller: 'Controller1',
	templateUrl: 'partials/view1.html'
    }).when('/view2/:firstname/:lastname', {
	controller: 'Controller2',
	templateUrl: '/partials/view2.html' //first slash is important
    });
    
    $locationProvider.html5Mode(true); // activate HTML5 code
});
