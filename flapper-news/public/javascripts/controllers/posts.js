angular.module('fN')
.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['postsService','$scope', '$stateParams'];

function PostsCtrl(postsService, $scope, $stateParams){
	$scope.post = postsService.posts[$stateParams.id];

	$scope.addComment = function(){
 	 if($scope.body === '') return;
  		$scope.post.comments.push({
    		body: $scope.body,
    		author: 'user',
    		upvotes: 0
  		});
  	$scope.body = '';
	};
};