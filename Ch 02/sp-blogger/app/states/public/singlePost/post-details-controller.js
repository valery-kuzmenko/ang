'use strict';

angular.module('states.public.singlePost').
    controller('PostController', ['$scope', 'Post', 
	function($scope, Post){
	    $scope.getAllPosts = function(){
		return Post.getArray();
	    };
	    $scope.posts = $scope.getAllPosts();
	}
    ]);