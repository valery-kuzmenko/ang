'use strict'

angular.module('spBlogger.posts',['spBlogger.posts.controllers','spBlogger.posts.directives','spBlogger.posts.services','spBlogger.posts.filters']);

angular.module('spBlogger.posts').config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $stateProvider.state('allPosts', {
	url: '/posts',
	controller : 'PostController',
	templateUrl : 'modules/posts/views/posts.html'
    });
    
    $stateProvider.state('', {
	url : '/posts/:id/:permalink',
	controller : 'PostDetailsController',
	templateUrl : 'modules/posts/views/singlePost.html'
    });
}]);