angular.module('sportsStoreAdmin')
	.constant('authUrl','http://localhost:8080/users/login')
	.constant('ordersUrl','http://localhost:8080/orders')
	.controller('authCtrl',function($scope,$http,$location,authUrl){
		$scope.authenticate = function(user,pass){
			$http.post(authUrl,{
				username:user,
				password:pass
			}, {
				withCredentials:true
			})
		}
	})
		
