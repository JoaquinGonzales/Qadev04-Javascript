var Calculator= require('./calculator.js');
describe('Calculator',function()
{
	//beforeEach nos ayuda a trabajar, creando las nuevas instancias y se ejecuta primero este
	//es bueno declarar la variable afure para que la funcion lo encuentre!
	var calculator;
	beforeEach(function()
	{
		calculator=new Calculator();
	}
	);
	xdescribe('sum',function(){
		it('should sum 1 and 3 and return 4',function()
		{
			num=Math.random();
			num2=Math.random();
			var actualRes=calculator.sum(num,num2);
			var expectedResult=num+num2;
			expect(actualRes).toEqual(expectedResult);
		});
		it('Error',function()
		{
			//var expec=calculator.sum('s',3);
			expect(function(){calculator.sum('s',3);}).toThrow("no es un numero");
		});
	});
	describe('Div',function()
	{
		it('division with zero',function()
		{
			expect(function(){calculator.div(1,0)}).toThrow("second number not should be Zero")
		});
		xit('should division 2 numbers',function()
		{
		
			var actualRes=calculator.div(2,1);
			var expectedResult=2;
			expect(actualRes).toEqual(expectedResult);
		});
	});
	
	xit('should less 2 numbers',function()
	{
		
		num=Math.random();
		num2=Math.random();
		var actualRes=calculator.res(num,num2);
		var expectedResult=num-num2;
		expect(actualRes).toEqual(expectedResult);
	});
	xit('should product 2 numbers',function()
	{
		
		var actualRes=calculator.prod(2,1);
		var expectedResult=2;
		expect(actualRes).toEqual(expectedResult);
	});
	
});