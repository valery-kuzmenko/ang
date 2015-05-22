'use strict';

angular.module('states.admin.postViewAll').config(['$stateProvider', function($stateProvider){
    $stateProvider.state('admin.postViewAll', {
	url : '',
	controller : 'PostListController',
	templateUrl : 'states/admin/postViewAll/admin-all-posts.html'
    });
}]);