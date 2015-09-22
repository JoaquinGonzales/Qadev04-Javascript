//test cases to ReadFile;
var RadFileClass = require('./MyFile.js');

describe('myFs module',function()
{
	var read= new RadFileClass();
	it('should read a file Shynchronously',function()
	{
		var actRes= read.readFile("D:\\nuevo\\uno.txt");
		expect(actRes).toBeDefined();
		expect(typeof(actRes)).toEqual('string');
	});
});