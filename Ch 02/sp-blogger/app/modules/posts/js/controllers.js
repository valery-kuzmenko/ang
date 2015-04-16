'use strict'

angular.module('spBlogger.posts.controllers',[]);

angular.module('spBlogger.posts.controllers').controller('PostController', ['$scope', 'Post', function($scope, Post){
    $scope.getAllPosts = function(){
	return Post.getArray();
    };
    $scope.posts = $scope.getAllPosts();
}]).controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post', function($stateParams, $state, $scope, Post){
    $scope.getPostById = function(id){
	return Post.get({id : id});
    }
    
    $scope.closePost = function(){
	$state.go('allPosts');
    }
    
    $scope.singlePost = $scope.getPostById($stateParams.id);
}]);