//angular.module("customServices",[])
//.factory("logService",function(){
//	var messageCount = 0;
//	return {
//		log:function(msg){
//			console.log("(LOG+"+messageCount+")"+msg);
//		}
//	}
//})

//	Factory you create an object, add properties to it, then return that same object.
//  Service, it’s instantiated with the ‘new’ keyword. Because of that, you’ll add properties to ‘this’ and the service will return ‘this’.
//  Providers are the only service you can pass into your .config() function. 

angular.module("customServices",[])
//	.service("logService",function(){
//		return {
//			messageCount: 0,
//			log:function(msg){
//				console.log("Debug:"+(this.messageCount++)+" "+msg);
//			}
//		};
//	});
	.provider("logService",function(){
		return {
			$get:function(){
				return {
					messageCount:0,
					log:function(msg){
						console.log("LOG+" + this.messageCount++ +")"+msg)
					}
				};
			}
		}
	});
//	.provider("logService",function(){
//		var counter = true;
//		var debug = true;
//		return {
//			messageCounterEnabled: function(setting){
//				if(angular.isDefined(setting)){
//					counter = setting;
//					return this;
//				} else {
//					return debug;
//				}
//			},
//			$get:function(){
//				return {
//					messageCount:0,
//					log:function(msg){
//						if(debug){
//							console.log("(LOG"+
//									(counter? "+"+this.messageCount++ +")":
//										")")+msg);
//						}
//					}
//				};
//			}
//		}
//	});

var baseLogger = function(){
	this.messageCount = 0;
	this.log = function(msg){
		console.log(this.msgType+":"+(this.messageCount++)+" "+msg);
	}
};

var debugLogger = function(){};
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";

var errorLogger = function(){};
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module("customServices",[])
	.service("logService",debugLogger)
	.service("errorService",errorLogger);