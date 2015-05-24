'use strict';

angular.module('components.transl').controller('TranslateController', ['$translate', '$scope', function($translate, $scope){
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    }
}]);