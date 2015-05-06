'use strict';

angular.module('states.admin.postUpdate').
    controller('PostUpdateController', ['$scope', '$state', 'Post', '$stateParams', 
	function($scope, $state, Post, $stateParams) {	    
	    $scope.post = Post.get({id : $stateParams.id});
	    $scope.buttonText = 'Update';
	    
	    $scope.updatePost = function(){
		$scope.buttonText = 'Updating...';
		$scope.post.$update(function(){
		    $state.go('admin.postViewAll');
		});
	    }
        }
    ]);