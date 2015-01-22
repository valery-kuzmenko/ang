'use strict';

angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
]);
// route params are available inside controller with $routeParams.lastname
angular.module('myApp').config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {
	controller: 'Controller1',
	templateUrl: 'view1.tpl' // The ng-template id
    }).when('/view2/:firstname/:lastname', {controller: 'Controller2',
	templateUrl: 'view2.tpl' // The ng-template id
    });
});
