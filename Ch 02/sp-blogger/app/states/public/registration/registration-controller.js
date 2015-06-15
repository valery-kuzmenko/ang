'use strict';

angular.module('states.public.registration').controller('registrationController', ['User', '$scope', '$timeout', '$state' , function(User, $scope, $timeout, $state){
    $scope.user = new User();
    
    $scope.register = function(){
	$scope.user.$save(function(data){

	    $scope.successMessage = true;
	    $scope.user = new User();
	    
	    $timeout(function(){
		$state.go('public.allPosts');	
	    },2000);
	});
    }
}]);