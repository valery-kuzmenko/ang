angular.module('spBlogger').value('version','V1.0');

angular.module('spBlogger').run(['$state', '$translateUrlLoader', function($state, $translateUrlLoader){
    $translateUrlLoader({url : 'http://api.bb.home/translate.json?lang=en'});
    $state.go('public.allPosts');
}]);