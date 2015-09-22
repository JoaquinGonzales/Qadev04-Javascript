var fs= require('fs');
var RadFileClass=function()
{

}
RadFileClass.prototype.readFile=function(data){
var tex= fs.readFileSync(data);
return tex;
}
RadFileClass.prototype.readFileAsync= function(data,callBack)
{
	//var conten='temp';
	var txt= fs.readFile(data,function(err,data1)
	{
		if(err)
		{
			throw err;
		}
		callBack();
		//console.log(data1.toString());
		
	});
}
module.exports=RadFileClass;