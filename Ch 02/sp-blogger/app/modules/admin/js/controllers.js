angular.module('spBlogger.admin.controllers', ['spBlogger.admin.services']);

angular.module('spBlogger.admin.controllers').
    controller('AdminController', ['$scope', function($scope) {
    
    }]).
    controller('PostCreationController', ['$scope', '$state' , 'Post', function($scope, $state, Post) {
	    
	    $scope.post = new Post();
	    $scope.buttonText = 'Create';
	    $scope.savePost = function(){
		console.log('PostCreationController');
		$scope.buttonText = 'Saving...';
		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g, '-');
		$scope.post.$save(function(){
		    $state.go('admin.postViewAll');
		});		
	    };
    }]).
    controller('PostUpdateController', ['$scope', '$state', 'Post', '$stateParams', function($scope, $state, Post, $stateParams) {
	    
	    $scope.post = Post.get({id : $stateParams.id});
	    $scope.buttonText = 'Update';
	    $scope.updatePost = function(){
		console.log('PostUpdateController');
		$scope.buttonText = 'Updating...';
		$scope.post.$update(function(){
		    $state.go('admin.postViewAll');
		});
	    }
        }]).
    controller('PostListController', ['$scope', 'Post', '$state', function($scope, Post, $state) {
            $scope.posts = Post.getArray();
            $scope.deletePost = function(post){
		$scope.buttonText = 'Deleting...';
		post.$remove(function() {
		    $state.go('admin.postViewAll', undefined, {//once deleted reload the state
			reload: true
		    });
		});
            };
    }]);