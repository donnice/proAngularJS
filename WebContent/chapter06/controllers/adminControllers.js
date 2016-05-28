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
			}).success(function(data){
				$location.path('/main');
			}).error(function(error){
				$scope.authenticationError = error;
			});
		};
	})
	.controller('mainCtrl',function($scope){
		$scope.screens = ['Products','Orders'];
		$scope.current = $scope.screens[0];
		
		$scope.setScreen = function(index){
			
		}
	})
		
