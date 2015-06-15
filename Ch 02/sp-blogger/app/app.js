'use strict';

angular.module('spBlogger', 
    [
        'ngResource',
	'ngAnimate',
        'components.transl',
	'components.posts', 
	'components.comments',
	'components.helpers',
	'components.users',
	'states.admin',
	'states.admin.postNew',
	'states.admin.postUpdate',
	'states.admin.postViewAll',
	'states.public',
	'states.public.allPosts',
	'states.public.singlePost',
	'states.public.registration',
    ]);


