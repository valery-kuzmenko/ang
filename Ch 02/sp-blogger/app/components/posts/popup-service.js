'use strict';

angular.module('components.posts').
    service('popupService', ['$window', function($window){
	this.showPopup = function(message){
	    return $window.confirm(message);
	};
    }]);