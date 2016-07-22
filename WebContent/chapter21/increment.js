angular.module("increment",[])
	.directive("increment",function(){
//		'A' - only matches attribute name <div attribute>
//		'E' - only matches element name	<element></element>
//		'C' - only matches class name
//		'M' - only matches comment
		return {
			restrict:"E",
			scope:{
//				 value:"=value"
				item:"=item",
				property:"@propertyName",
				restful:"@restful",
				method:"@methodName"
			},
			link:function(scope,element,attrs){
				var button = angular.element("<button>").text("+");
				button.addClass("btn btn-primary btn-xs");
				element.append(button);
				button.on("click",function(){
					scope.$apply(function(){
//						scope.value++;
						scope.item[scope.property]++;
						if(scope.restful) {
							scope.item[scope.method]();
						}
					})
				})
			},
		}
	});