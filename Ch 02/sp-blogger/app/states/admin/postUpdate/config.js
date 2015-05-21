'use strict';

angular.module('states.admin.postUpdate').config(['$stateProvider', function($stateProvider){
    $stateProvider.state('admin.postUpdate', {
	url : '/posts/:id/edit',
	controller : 'PostUpdateController',
	templateUrl : 'states/admin/postUpdate/admin-update-post.html'
    });
}]);