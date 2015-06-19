'use strict';

angular.module('states.admin.userViewAll').controller('UserListController', ['$scope', 'User' ,function($scope, User){
    $scope.users = User.getArray();
}]);