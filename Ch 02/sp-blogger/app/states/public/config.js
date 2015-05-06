'use strict';

angular.module('states.public').config(['$stateProvider', 
    function($stateProvider){
	$stateProvider.state('public', {
	    url : '/',
	    abstract : true,
	    templateUrl : 'layouts/public.html'
	});
    }
]);