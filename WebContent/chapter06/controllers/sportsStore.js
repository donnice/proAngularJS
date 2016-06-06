angular.module("sportsStore")
.constant("dataUrl","http://localhost:8080/proAngularJS/chapter06/products.json")
.constant("orderUrl","http://localhost:8080/proAngularJS/chapter06/orders")
.controller("sportsStoreCtrl",function($scope,$http, $location,dataUrl,orderUrl, cart){
	$scope.data = {};
	
	$http.get(dataUrl)
		.success(function(data){
			$scope.data.products = data;
		})
		.error(function(error){
			$scope.data.error = error;
		});
	
	$scope.sendOrder = function(shippingDetails){
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl, order)
		.success(function(data){
			$scope.data.orderId = data.id;
			cart.getProducts().length = 0;
		})
		.error(function(error){
			$scope.data.orderError = error;
		}).finally(function(){
			$location.path("/complete");
		});
	}
});