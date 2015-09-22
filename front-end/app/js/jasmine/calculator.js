var Calculator=function()
{
	
};
Calculator.prototype.sum = function(num,num2)
	{
		if(typeof(num) == 'number' || typeof(num2)=='number')
		{
			return num+num2;
		}
		else 
		{
			throw("no es un numero");
		}
	}
	Calculator.prototype.prod = function(num,num2)
	{
		return num*num2;
	}
	Calculator.prototype.div = function(num,num2)
	{
		if(num2!=0)
			return num/num2;
		else throw("second number not should be Zero");
	}
	Calculator.prototype.res = function(num,num2)
	{
		return num-num2;
	}
module.exports= Calculator;

//tarea hacer lo mismo para todas las operaciones y agregar memoria