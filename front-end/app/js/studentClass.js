/*Design a class named Student that has two private data – student id and score.
The class should contain a parameterized constructor to initialize its data
members and one method to display the information. Now write a Javascript
program that will consume this class by using an array of Student objects to
represent information about n numbers of students. Your program should take
input from the keyboard and display the information of the students.*/

var Student=function(id,score)
{
	var _id=id;
	var _score=score;
	this.setId=function(newId)
	{
		_id=newId;
	}
	this.getId=function()
	{
		return _id;
	}
	this.getScore=function()
	{
		return _score;
	}
	this.getInfo=function()
	{
		console.log('the Id of the Student is:',this.getId(), 'and his score is: ',this.getScore());
	}
}
var student1=new Student(1,100);



var Program= function(num)
{
	var students=[];
	this.createStudents=function()
	{
	var i=1;
		while(i<num)
		{
			students.push(new Student(i,10+i));
		}
	}
}
