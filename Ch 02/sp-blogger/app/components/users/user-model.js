'use strict';

angular.module('components.users').factory('User', ['$resource', 'API_USERS_ENDPOINT', function($resource, API_USERS_ENDPOINT){
    return $resource(API_USERS_ENDPOINT, {id : '@id'}, {
	update : {
	    method : 'PUT'
	},
	getArray : {
	    isArray : true
	}
    });
}]);