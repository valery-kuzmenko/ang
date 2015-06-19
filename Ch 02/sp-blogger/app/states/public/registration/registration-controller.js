'use strict';

angular.module('states.public.registration').controller('registrationController', ['User', '$scope', '$timeout', '$state' ,'$translate', function(User, $scope, $timeout, $state, $translate){
    $scope.user = new User();
    
    $scope.register = function(){
	$scope.user.$save(
            function(data){
                $scope.successMessage = true;
                $scope.user = new User();

                $timeout(function(){
                    $state.go('public.allPosts');	
                },2000);
            },
            function(data){
                if(data.status == 400 && data.data.errors && data.data.errors.children) {
                    angular.forEach(data.data.errors.children, function(value, key){
                        if(value.errors && angular.isArray(value.errors)) {
                            $scope.registrationForm[key].$setValidity('serverError', false);
				$translate(value.errors.join(', ')).then(function (translation) {
				    $scope.registrationForm[key].$error.serverError = translation;
				});
                            ;
                        }
                    });
                }
            }
        );
    }
}]);