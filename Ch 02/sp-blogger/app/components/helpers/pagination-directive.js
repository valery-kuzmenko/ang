'use strict';

angular.module('components.helpers').directive('pagination', function() {
    return {
	restrict: 'AE',
	templateUrl: 'components/helpers/pagination.html',
	replace: true,
	link: function($scope, elem, attr) {
	    $scope.$watch(function() {

		if ($scope.pagination_data) {

		    var page = $scope.pagination_data['page'];
		    var pages_cnt = $scope.pagination_data['pages_cnt'];

		    var pages = [];
		    if (pages_cnt && pages_cnt > 1) {
			for (var i = 1; i <= pages_cnt; i++) {
			    pages[pages.length] = i;
			}
			$scope.current_page = page;
		    }
		    $scope.pages = pages;
		}
	    });
	}
    };
}); 