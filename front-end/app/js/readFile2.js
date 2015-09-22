var fs= require('fs');
var RadFileClass=function()
{

}
RadFileClass.prototype.readFile=function(data){
var tex= fs.readFileSync(data);
return tex;
}
RadFileClass.prototype.readFileAsync= function(data)
{
//var conten='s';
var txt= fs.readFile(data,function(err,data1)
{
	if(err)
	{
		throw err;
	}
	var conten=data1;
	console.log(conten.toString());
});
}
module.exports=RadFileClass;