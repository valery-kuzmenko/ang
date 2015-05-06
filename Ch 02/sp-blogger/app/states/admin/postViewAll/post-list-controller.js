'use strict';

angular.module('states.admin.postViewAll').
    controller('PostListController', ['$scope', 'Post', '$state', 
	function($scope, Post, $state) {
	    $scope.posts = Post.getArray();
	    
	    $scope.deletePost = function(post){
		$scope.buttonText = 'Deleting...';
		post.$remove(function() {
		    $state.go('admin.postViewAll', undefined, {//once deleted reload the state
			reload: true
		    });
		});
	    };
	}
    ]);

