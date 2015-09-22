var getSum= function(num)
{
var aux=0;
	var arre=[];
	for(var i=1; i<= num; i++)
	{
		arre.push(i);
	}
	for(var j=0;j < arre.length ;j++)
	{
		aux+=parseInt(arre[j]);
	}
	console.log(aux);
}
var getProduct=function(num)
{
	var aux=1;
	var arre=[];
	for(var i=1;i<=num;i++)
	{
		arre.push(i);
	}
	for(var j=0;j<arre.length;j++)
	{
		aux*=parseInt(arre[j]);
	}
	console.log(aux)
}
