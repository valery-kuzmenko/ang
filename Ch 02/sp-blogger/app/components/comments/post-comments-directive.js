'use strict';

angular.module('components.comments').directive('postComments', ['Comment', '$stateParams', function(Comment, $stateParams) {
	return {
	    restrict: 'AE',
	    templateUrl: 'components/comments/post-comments.html',
	    replace: true,
	    link: function($scope, elem, attr) {
		$scope.paginationClick = function(page) {
		    if(!page) {
			page = 1;
		    } 
		    $scope.comments = Comment.getArray({id: $stateParams.id, page: page, rpp: 5}, function(result, headers) {
			var response_headers = headers();
			$scope.pagination_data = {pages_cnt: response_headers['blogger-pages-count'], page : page};
			
		    });
		};

		$scope.comment = new Comment();

		$scope.createComment = function() {
		    $scope.comment.$save({'id': $stateParams.id}, function() {
			$scope.paginationClick();
		    });
		}

		$scope.paginationClick();
	    }
	};
    }]);