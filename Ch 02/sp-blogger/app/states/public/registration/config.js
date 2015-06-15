'use strict';

angular.module('states.public.registration').config(['$stateProvider', function($stateProvider){
    $stateProvider.state('public.registration', {
	url: '/registration',
	controller: 'registrationController',
	templateUrl: 'states/public/registration/registration.html'
    });
}]);