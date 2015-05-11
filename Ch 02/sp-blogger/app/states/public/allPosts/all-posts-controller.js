'use strict';

angular.module('states.public.allPosts')
    .controller('PostController', ['$scope', 'Post', function($scope, Post){
	$scope.getAllPosts = function(){
	    return Post.getArray();
	};
	$scope.posts = $scope.getAllPosts();
    }]);

