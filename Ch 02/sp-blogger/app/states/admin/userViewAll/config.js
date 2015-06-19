'use strict';

angular.module('states.admin.userViewAll').config(['$stateProvider',function($stateProvider){
    $stateProvider.state('admin.userViewAll', {
	url : '/users',
	controller : 'UserListController',
	templateUrl : 'states/admin/userViewAll/admin-all-users.html'
    });
}]);