angular.module('flapperNews').factory('postsService', postsService);

postsService.$inject = [];

function postsService() {
    var o = {
        posts: []
    };
    o.create = function(post) {
        return $http.post('/posts', post).success(function(data) {
            o.posts.push(data);
        });
    };
    return o;
};
