angular.module('flapperNews').factory('postsService', postsService);

	postsService.$inject = [];

	function postsService(){
		var o = {
    		posts: []
  		};
  	return o;
	};