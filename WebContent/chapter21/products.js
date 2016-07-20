angular.module("exampleApp",[])
.controller("defaultCtrl",function($scope){
	
	$scope.displayMode = "list";
	$scope.currentProduct = null;
	
	$scope.listMajors = function() {
		$scope.majors = [
		    {id:0, name:"East China University of Science of Technology", catrgory:"Environmental Engineering", price:10000},
		    {id:1, name:"University of Michigan at Ann Arbor", catrgory:"Chemical Engineering", price:66000},
		    {id:2, name:"Georgia Institute of Technology", catrgory:"Computer Science", price:6000},
		    {id:3, name:"University of Washington at Seattle", catrgory:"Computational Finance and Risk Management", price:37800},
		    {id:4, name:"University of California at Los Angeles", catrgory:"Electrical Engineering", price:62000},
		    {id:5, name:"California Institute of Technology", catrgory:"Applied Physics and Material Science", price:162000},
		    {id:6, name:"Massachusets Institute of Technology", catrgory:"Mechanical Engineering", price:30000},
		    {id:7, name:"Karlsruhe Institute of Technology", catrgory:"Biology", price:3336},
		    {id:8, name:"The Hong Kong University of Science and Technology", catrgory:"Civil Engineering", price:15000},
		    {id:9, name:"The Chinese University of Hong Kong", catrgory:"Juris Doctor", price:12885},
		    {id:10, name:"The University of Hong Kong", catrgory:"Medicine", price:18811}
		    
		];
	}
	
	$scope.deleteMajor = function(major) {
		// start from 1
		$scope.majors.splice($scope.majors.indexOf(major),1);
	}
	
	$scope.createMajor = function(major) {
		$scope.majors.push(major);
		$scope.displayMode = "list";
	}
	
	$scope.updateMajor = function(major) {
		for(var i = 0; i < $scope.majors.length; i++) {
			if($scope.majors[i].id == major.id){
				$scope.majors[i] = major;
				break;
			}
		}
		$scope.displayMode = "list";
	}
	
	$scope.editOrCreateMajor = function(major) {
		$scope.currentMajor = major?angular.copy(major):{};
		$scope.displayMode = "edit";
	}
	
	$scope.saveEdit = function(major) {
		if(angular.isDefined(major.id)) {
			$scope.updateMajor(major);
		} else {
			$scope.createMajor(major);
		}
	}
	
	$scope.cancelEdit = function() {
		$scope.currentMajor = {};
		$scope.displayMode = "list";
	}
	
	$scope.listMajors();
});