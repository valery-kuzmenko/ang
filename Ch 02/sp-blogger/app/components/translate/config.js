'use strict';

angular.module('components.transl').
    config(function($translateProvider){
        $translateProvider.useUrlLoader('translate.json');
        $translateProvider.preferredLanguage('en');
    });