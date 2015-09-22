var getCapicua= function(number1,number2)
{
	var num1=number1;
	var num2=number2;
	for(var i=num1; i<=number2;i++)
	{
		if(isCapicua(i))
		{
		return i;
		}
	}
	
}
var isCapicua= function(number)
{
	var revNumber= parseInt(number.toString().split('').reverse().join(''));
	return number== revNumber;
}
//using continue break statement

var isOddnumber= function(number)
{
	return number%2 != 0;
}
var getEvenNumbers=function(n)
{
	var evenNumber=[];
	for(var i=0;i<n;i++)
	{
		if(isOddnumber(i))
		{
			continue;
		}
		evenNumber.push(i);
	}
	return evenNumber;
}
var reverseString = function(str)
{
	var aux='';
	var tam=str.length-1;
	for(var i=tam;i>=0;i--)
	{
		aux+=str[i];
	}
	return aux;
}
var truncateWord=function(str,num)
{
	var str1=[];
	var puntero=0;
	while(str1.length < num)
	{
		str1.push(str[puntero]);
		puntero++;
	}
	return str1.join('');
}
var n=6;
console.log('de la cantidad',n,'los sig numeros son pares',getEvenNumbers(n));
var str='Hello1234';
console.log(str,',reverse is:',reverseString(str));
console.log(str,',truncate word:',truncateWord(str,n));