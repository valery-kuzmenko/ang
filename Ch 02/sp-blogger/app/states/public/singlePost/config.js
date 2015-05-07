'use strict';

angular.module('states.public.singlePost').config(['$stateProvider', 
    function($stateProvider){
	$stateProvider.state('public.singlePost', {
	    url : '/posts/:id/:permalink',
	    controller : 'PostDetailsController',
	    templateUrl : 'states/public/singlePost/singlePost.html'
	});
    }
]);