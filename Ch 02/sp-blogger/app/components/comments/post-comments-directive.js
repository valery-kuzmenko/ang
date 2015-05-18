'use strict';

angular.module('components.comments').directive('postComments', ['Comment', '$stateParams', '$timeout', function(Comment, $stateParams, $timeout, $anchorScroll){
    return {
	restrict : 'AE',
	templateUrl : 'components/comments/post-comments.html',
	replace : true,
	link: function(scope, elem, attr){
	    scope.loadComments = function(page) {
		if(!page) page = 1;
		
		scope.comments = Comment.getArray({id : $stateParams.id, page : page, rpp : 5}, function(result, headers) {
		    var response_headers = headers(), pages = [];

		    if(response_headers['blogger-pages-count'] && response_headers['blogger-pages-count'] > 1) {
			for (var i=1; i <= response_headers['blogger-pages-count'];i++) {
			    pages[pages.length] = i;
			}
			scope.current_page = page;
		    }
		    scope.pages = pages;
		});		
	    };
	    scope.loadComments();
	}
    };
}]);