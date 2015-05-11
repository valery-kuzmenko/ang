angular.module('spBlogger').value('version','V1.0');

angular.module('spBlogger').run(['$state', function($state){
    $state.go('public.allPosts');
}]);