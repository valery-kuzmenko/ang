angular.module('spBlogger.admin.controllers', ['spBlogger.admin.services']);

angular.module('spBlogger.admin.controllers').
    controller('AdminController', ['$scope', function($scope) {
    
    }]).
    controller('PostCreationController', ['$scope', '$state' , 'Post', function($scope, $state, Post) {
	    $scope.post = new Post();
	    $scope.buttonText = 'Create';
	    $scope.savePost = function(){
		$scope.buttonText = 'Saving...';
		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g, '-');
		$scope.post.$save(function(){
		    //$state.go('admin.postViewAll');
		    alert('Saved!');
		});		
	    };
    }]).
    controller('PostUpdateController', ['$scope', function($scope) {
    
    }]).
    controller('PostListController', ['$scope', function($scope) {
    
    }]);