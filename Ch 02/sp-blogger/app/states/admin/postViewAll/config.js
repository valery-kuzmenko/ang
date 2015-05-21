'use strict';

angular.module('states.admin.postViewAll').config(['$stateProvider', function($stateProvider){
    $stateProvider.state('admin.postViewAll', {
	url : '/posts',
	controller : 'PostListController',
	templateUrl : 'states/admin/postViewAll/admin-all-posts.html'
    });
}]);