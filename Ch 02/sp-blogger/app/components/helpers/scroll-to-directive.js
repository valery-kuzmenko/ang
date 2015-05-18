'use strict';

angular.module('components.helpers').directive('scrollTo', function() {
    return {
	restrict: 'AE',
	replace: false,
	link: function(scope, elem, attrs) {
	    elem.on('click', function() {
		var target = $('body html');
		if (attrs.scrollTarget) {
		    target = $(attrs.scrollTarget);
		}

		$('body').animate({scrollTop: target.offset().top}, 'slow');
	    });
	}
    };
});