'use strict';

angular.module('components.transl').controller('TranslateController', ['$translate', '$scope', function($translate, $scope){
    $scope.currentLanguage = 'en';
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
	$scope.currentLanguage = langKey;
    }
}]);