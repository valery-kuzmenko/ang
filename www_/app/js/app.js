'use strict';
angular.module('myApp', [
    'myApp.controllers',
    'ui.router' //this is the dependency on ui.router module
]);
angular.module('myApp').config(function($stateProvider,
    $urlRouterProvider, $locationProvider) { //$stateProvider and $urlRouterProvider are from ui.router module
    $stateProvider.state('view1', {
	url: '/view1',
	controller: 'Controller1',
	templateUrl: '/partials/view1.html'
    }).state('view2', {url: '/view2/:firstname/:lastname',
	controller: 'Controller2',
	resolve: {
	    names: function() {
		return ['Misko', 'Vojta', 'Brad'];
	    }
	},
	templateUrl: '/partials/view2.html'
    });
    $urlRouterProvider.otherwise('/view1'); // when no route match found redirect to /view1
    $locationProvider.html5Mode(true);
});