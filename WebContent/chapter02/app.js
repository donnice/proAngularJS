var model = {
	user: "Someone"
};

var todoApp = angular.module('todoApp',[]);

todoApp.run(function($http){
	$http.get('data.json').success(function(data){
		
	})
})