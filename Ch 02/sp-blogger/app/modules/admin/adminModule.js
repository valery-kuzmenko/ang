'use strict'


angular.module('spBlogger.admin', ['spBlogger.admin.controllers']);

angular.module('spBlogger.admin').config(['$stateProvider', 
    function($stateProvider){
    $stateProvider.
    state('admin', {
	url : '/admin',
	abstract : true, // this state can't be loaded directly only using its child states
	controller : 'AdminController',
	templateUrl : 'modules/admin/views/admin-home.html'
    }).
    state('admin.postNew', { // creation of child states of admin state - admin.postNew
	url : '/posts/new',
	controller : 'PostCreationController',
	templateUrl : 'modules/admin/views/admin-new-post.html',
    }).
    state('admin.postUpdate', {
	url : '/posts/:id/edit',
	controller : 'PostUpdateController',
	templateUrl : 'modules/admin/views/admin-update-post.html'
    }).
    state('admin.postViewAll', {
	url : '', // default view
	controller : 'PostListController',
	templateUrl : 'modules/admin/views/admin-all-posts.html'
    });    
}]);

