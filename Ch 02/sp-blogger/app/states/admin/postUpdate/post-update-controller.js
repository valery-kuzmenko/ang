'use strict';

angular.module('states.admin.postUpdate').
    controller('PostUpdateController', ['$scope', '$state', 'Post', '$stateParams', '$translate', 
	function($scope, $state, Post, $stateParams, $translate) {	    
	    $scope.post = Post.get({id : $stateParams.id});
	    
	    $translate('admin.update').then(function(result){
		$scope.buttonText = result;
	    });
	    
	    $scope.updatePost = function(){
		$translate('admin.updating...').then(function(result){
		    $scope.buttonText = result;
		});
		$scope.post.$update(function(){
		    $state.go('admin.postViewAll');
		});
	    }
        }
    ]);