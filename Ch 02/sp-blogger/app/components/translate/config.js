'use strict';

angular.module('components.transl').
    config(function($translateProvider){
        $translateProvider.useUrlLoader('http://api.bb.home/translate.json');
        $translateProvider.preferredLanguage('en');
	$translateProvider.usePostCompiling(true);
    });