/**
 * Created by JoaquinGonzales on 8/24/2015.
 */

/**
 * it is a function to do an operation.
 * @param number1
 * @param number2
 * @param callback function
 */
var doOperation=function(number1,number2,callback)
{
    callback();
    callback();callback();callback();
    return number1+number2;
}

doOperation(1,2, function(){console.log('hello');});
/*
* funcion anonima y auto-ejecutable
* */
(function(name)
{
    if(!name)
        name='world';
    console.log('Anonymous'+name);
})(' hola');
/***
 * Constructor de person class
 * @param name se refiere al nombre
 * @param age edad de la clase
 * @constructor
 */
var Person=function(name,age)
{
    this.name=name;
    var _age=age;
    this.getBio= function()
    {
        console.log('hello my name is :',this.name,'and my age is:',_age,'years old');
        _doSomethingPrivate();
    }
    this.getAge=function()
    {
        return _age;
    }
    this.setAge=function(age)
    {
        _age=age;
    }
    var _doSomethingPrivate = function()
    {
        console.log('private method');
    }
};
/**
 * funcion estatica de la clase persona(definicion de metodos estaticos)
 * */
Person.sayHello=function()
{
    console.log('say hello');
}
var pepe= new Person('pepe',14);
pepe.getBio();
