/**
 * Created by JoaquinGonzales on 8/10/2015.
 */
console.log('message error');
/**
 * dcumentation....
 * */
var sayhello = function(var2)
{
    var message = 'hola '+var2+'!!!';
    console.log(message);
};

//sayhello('hola mundo');
/*
this is a class
 */
var Person=function(name,age)
{
    this.name=name;
    this.age=age;
    /**
     * this is a method
     */
    this.sayHello=function(name)
    {
        console.log(arguments);
        console.log('hola, ',name,'mi nombre es:',this.name);
    }
}
/*
instancias de clases
 */
var hugo= new Person('hugo',10);
var paco= new Person('paco',10);
/*
funcion de prueba
* */
//var age='';
var calculateAge= function (bornyear)
{
     var age = 2014 - bornyear;
    return age;
}



