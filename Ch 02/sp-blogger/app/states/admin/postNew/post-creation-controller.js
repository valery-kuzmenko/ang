'use strict';

angular.module('states.admin.postNew').
    controller('PostCreationController', ['$scope', '$state' , 'Post', 
	function($scope, $state, Post) {
	    $scope.post = new Post();
	    $scope.buttonText = 'Create';
	    
	    $scope.savePost = function(){
		$scope.buttonText = 'Saving...';
		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g, '-');
		$scope.post.$save(function(){
		    $state.go('admin.postViewAll');
		});		
	    };
	}
    ]);