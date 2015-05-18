'use strict';

angular.module('components.comments').factory('Comment', ['$resource', 'API_COMMENT_ENDPOINT', function($resource, API_COMMENT_ENDPOINT){
    return $resource(API_COMMENT_ENDPOINT, {id : '@post_id', comment_id : '@id'} , {
	update : {
	    method : 'PUT'
	},
	getArray : {
	    isArray : true
	}
    });
}]);