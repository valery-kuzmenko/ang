'use strict';

angular.module('states.public.allPosts').config(['$stateProvider', 
    function($stateProvider){
	$stateProvider.state('public.allPosts', {
	    url : '/',
	    abstract : true,
	    templateUrl : 'layouts/public.html'
	});
    }
]);