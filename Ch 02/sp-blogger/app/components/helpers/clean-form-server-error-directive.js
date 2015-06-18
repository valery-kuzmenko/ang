'use strict';

angular.module('components.helpers').directive('serverError', function(){
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ctrl) {
            element.on('change', function() {
                scope.$apply(function(){
                    ctrl.$setValidity('serverError', true);
                });
            });
        }
    }
});