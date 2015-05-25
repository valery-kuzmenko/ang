'use strict';

angular.module('states.admin.postNew').
    controller('PostCreationController', ['$scope', '$state', 'Post', '$translate', '$rootScope',
	function($scope, $state, Post, $translate, $rootScope) {
	    $scope.post = new Post();

	    $translate('admin.create').then(function(result) {
		$scope.buttonText = result;
	    });

	    $scope.savePost = function() {
		$translate('admin.creating...').then(function(result) {
		    $scope.buttonText = result;
		});

		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g, '-');
		$scope.post.$save(function() {
		    $state.go('admin.postViewAll');
		});
	    };
	    
	    $rootScope.$on('$translateChangeSuccess', function() {
		$translate('admin.create').then(function(result) {
		    $scope.buttonText = result;
		});
	    });
	}
    ]);