
angular.module('components.helpers')
 .directive('equalHeight', function($timeout) {
	return {
	    restrict: 'A',
	    replace: false,
	    link: function(scope, elem, attrs) {

		var childItemClass = '';
		if (attrs.equalHeightClass) {
		    childItemClass = '.' + attrs.equalHeightClass;
		}

		var items = $('[equal-height-group =' + attrs.equalHeightGroup + '] ' + childItemClass);
		
		function equalHeight() {
		    var height = 0;
		    items.each(function() {
			if ($(this).height() > height) {
			    height = $(this).outerHeight();
			}
		    });

		    items.height(height);
		};

		if (scope.$last) {
		    // apply after all items are rendered
		    $timeout(function() {
			equalHeight();
			var timeout = null;
			
			$(window).on('resize.equalHeightResize', function() {
			    $timeout.cancel(timeout);
			    timeout = $timeout(function() {
				items.css('height', 'auto');
				equalHeight();
			    }, 150);
			});
		    });
		    // unbind on destoy
		    scope.$on('$destroy', function() {
			$(window).off('resize.equalHeightResize');
		    });
		}
	    }
	};
    });;

