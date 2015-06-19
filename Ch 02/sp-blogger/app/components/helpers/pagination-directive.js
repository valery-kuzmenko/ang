'use strict';

angular.module('components.helpers').directive('pagination', function(){
    return {
	restrict: 'AE',
	templateUrl: 'components/helpers/pagination.html',
	replace: true,
	link: function($scope, elem, attr) {
	    var pages = [];
	    if ($scope.pagination_data['blogger-pages-count'] && $scope.pagination_data['blogger-pages-count'] > 1) {
		for (var i = 1; i <= $scope.pagination_data['blogger-pages-count']; i++) {
		    $scope.pagination_data[pages.length] = i;
		}
		$scope.current_page = page;
	    }
	    $scope.pages = pages;
	}
    };
}); 