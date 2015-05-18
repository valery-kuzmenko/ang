angular.module('components.helpers').
    directive('appVersion',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
});