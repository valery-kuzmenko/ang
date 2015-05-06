'use strict';

angular.module('states.admin').config(['$stateProvider', 
    function($stateProvider){
	$stateProvider.state('admin', {
	    url : '/admin',
	    abstract : true,
	    templateUrl : 'layouts/admin.html'
	});
    }
]);