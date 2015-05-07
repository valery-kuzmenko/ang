'use strict';

angular.module('states.admin.postNew').config(['$stateProvider', function($stateProvider){
	$stateProvider.state('admin.postNew', {
	    url : '/posts/new',
	    controller : 'PostCreationController',
	    templateUrl : 'states/admin/postNew/admin-new-post.html'
	});
}]);