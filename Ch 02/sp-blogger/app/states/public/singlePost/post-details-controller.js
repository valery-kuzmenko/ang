'use strict';

angular.module('states.public.singlePost').
    controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post', function($stateParams, $state, $scope, Post){
    $scope.getPostById = function(id){
	return Post.get({id : id});
    }
    
    $scope.closePost = function(){
	$state.go('allPosts');
    }
    
    $scope.singlePost = $scope.getPostById($stateParams.id);
}]);