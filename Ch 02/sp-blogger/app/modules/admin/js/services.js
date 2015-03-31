'use strict'

angular.module('spBlogger.admin.services', []).factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
    return $resource(API_ENDPOINT, {id : '@_id'} , {
        update : {
            method: 'PUT'
        },
	get : {
	    transformResponse : function(data, headersGetter){
		var dataObj = JSON.parse(data);
		return dataObj['data'];
	    },
	}
    });
    
}]).service('popupService', ['$window', function($window){
    this.showPopup = function(){
        return $window.confirm(message);
    };
}]).value('API_ENDPOINT', 'http://api.bb.home/blogs/:id');