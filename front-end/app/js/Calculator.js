/**
 * Created by JoaquinGonzales on 8/24/2015.
 */
var Calculator= function(){
    this.calculateOperation=function ()
    {
        if(arguments.length==0)
            console.log('Error:debe introducir argumentos');
        console.log('the sum is:',this.calculateSum(arguments));
        console.log('the max number is:',this.calculateMax(arguments));
        console.log('the avarage is:',this.calculateAvarage(arguments));
        console.log('the min number is:',this.calculateMin(arguments));


    }
    this.calculateSum=function()
    {
        if(typeof (arguments)=='Object')
        {
            return Sum(arguments[0]);
        }
        return Sum(arguments);
    }
     var Sum=function(numero,pos)
    {
        if(pos ===undefined)
        {
            pos = numero.length - 1;
        }
        var currentVal= numero[pos];
        if(pos == 0)
            return currentVal;
        return currentVal+Sum(numero,pos-1);
    }
    this.calculateMax= function (numero,pos,max) {
        var max;
        if(pos === undefined)
        {
            pos=numero.length -1;
        }
        if(max ===undefined)
        {
            max=numero[pos];
        }
        if(numero[pos]>max)
        {
            max=numero[pos];
        }
        if (pos==0)

            return max
        else return this.calculateMax(numero,pos-1,max);
    };
    this.calculateAvarage= function(numero)
    {
        var pos = numero.length -1;
        var total= numero.length;
        var sum=this.calculateSum(numero,pos);
        return sum/total;
    }
    this.calculateMin=function(numero,pos,min)
    {
        if(pos == undefined)
        {
            pos = numero.length -1;
        }
        if(min ===undefined)
        {
            min=numero[pos];
        }
        if(min>numero[pos])
        {
            min=numero[pos];
        }
        if (pos==0)

            return min;
        else return this.calculateMin(numero,pos-1,min);
    }
}
var calculator= new Calculator();