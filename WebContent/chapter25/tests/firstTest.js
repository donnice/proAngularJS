// page 20
describe("First Test",function(){
	
	var counter;
	
	beforeEach(function(){
		counter = 0;
	});
	
	it("increments value", function(){
		counter++;
		
		// Assert
		expect(counter).toEqual(1);
	})
	
	it("decrements value", function(){
		counter--;
		
		// Assert
		expect(counter).toEqual(-1);
	})
});