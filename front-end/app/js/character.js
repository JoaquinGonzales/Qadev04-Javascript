
var firstcharacter = function(arr,pos) {
	var arregl= arr;
 if(pos == undefined)
  {
	pos = 0;
  }
	for(var j=0;j<=arregl.length;j++)
	{
	if(pos <arregl.length+1){
	var a=arregl[j];
		if(arregl[pos] == arregl[j])
		{
			pos++;
			this.firstcharacter(arregl,pos);
		}
		
		else 
		{
		return arregl[pos];		
		}
	}
	}
  
};

