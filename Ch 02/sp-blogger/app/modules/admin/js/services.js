'use strict'

angular.module('spBlogger.admin.services', []).factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
    return $resource(API_ENDPOINT, {id : '@_id'} , {
        update : {
            method: 'PUT'
        },
	get : {

	}
	,getArray: {
	    isArray : true
	},
	save : {
	    method: 'POST'
	}
    });
    
}]).service('popupService', ['$window', function($window){
    this.showPopup = function(){
        return $window.confirm(message);
    };
}]).value('API_ENDPOINT', 'http://api.bb.home/blogs/:id');