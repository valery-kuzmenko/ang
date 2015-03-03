'use strict'

angular.module('spBlogger.admin.services', []).factory('Post', ['$resource', 'API_ENDPOINT', function($resource){
    return $resource(API_ENDPOINT, {id : '@_id'} , {
        update : {
            method: 'PUT'
        }
    });
    
}]).service('popupService', ['$window', function($window){
    this.showPopup = function(){
        return $window.confirm(message);
    };
}]).value('API_ENDPOINT', 'http://blog.loc/api/posts/:id');