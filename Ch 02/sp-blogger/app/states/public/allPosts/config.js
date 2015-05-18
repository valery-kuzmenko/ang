'use strict';

angular.module('states.public.allPosts').config(['$stateProvider', 
    function($stateProvider){
	$stateProvider.state('public.allPosts', {
	    url : '/posts',
	    controller : 'PostController',
	    templateUrl : 'states/public/allPosts/posts.html'
	});
    }
]);