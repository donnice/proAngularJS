angular.module("sportsStore")
	.constant("productListActiveClass","btn-primary")
	.constant("productListPageCount",3)
	.controller("productListCtrl",function($scope,$filter,productListActiveClass
			,productListPageCount){
		
		var selectedCategory = null;
		
		$scope.selectedPage = 1;
		
		
		$scope.selectCategory = function(newCategory){
			selectedCategory = newCategory;
		}
		
		$scope.categoryFilterFn = function(product){
			return selectedCategory == null || 
				product.category == selectedCategory;
		}
		
		$scope.getCategoryClass = function(category){
			return selectedCategory == category? productListActiveClass:"";
		}
	});