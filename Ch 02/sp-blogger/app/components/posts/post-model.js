'use strict';

angular.module('components.posts').factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
    return $resource(API_ENDPOINT, {id : '@id'} , {
        update : {
            method: 'PUT'
        },
	getArray: {
	    isArray : true
	},
	save : {
	    method: 'POST'
	}
    });
}]).value('API_ENDPOINT', 'http://api.bb.home/blogs/:id');