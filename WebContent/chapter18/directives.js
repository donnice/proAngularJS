//angular.module("exampleApp")
angular.module("customDirectives",["customServices"])
.directive("triButton",function(logService){
	return { 
		// @ allows a value defined on the directive attribute to be passed to the directive's isolate scope. 
		// & allows the directive's isolate scope to pass values into the parent scope for evaluation in the
		//			expression defined in the attribute. 
		// = sets up a two-way binding expression between the directive's isolate scope and the parent scope.
		
		scope:{counter:"=counter"},
		link: function(scope,element,attrs){
			element.on("click",function(event){
				logService.log("Button click: "+event.target.innerText);
				scope.$apply(function(){
					scope.counter++;
				});
			});
		}		
	}
});