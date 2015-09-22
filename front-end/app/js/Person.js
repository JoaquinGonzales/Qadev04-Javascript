/**
 * Created by JoaquinGonzales on 8/27/2015.
 */
var Person=function(name,age)
{
    this.name=name;
    var _age=age;
    /*metodo privilegiado por que accede a los atributos privados*/
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
Person.prototype.getBio= function()
{
    console.log('hello my name is :',this.name,'and my age is:',this.getAge(),'years old');
    _doSomethingPrivate();
}
/**
 * funcion estatica de la clase persona(definicion de metodos estaticos)
 * */
Person.sayHello=function()
{
    console.log('say hello');
}
var pepe= new Person('pepe',14);
pepe.getBio();