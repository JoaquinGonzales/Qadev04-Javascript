/**
 * Created by JoaquinGonzales on 8/20/2015.
 */
var countWords=function(paragraph)
{
    var words = paragraph.split(' ');
    return words.length;
}
var hora=function()
{
    var dat = new Date();
    var dia= dat.getDay();
    var res;
    var hora = dat.getHours();
    if(hora >12)
    {
        hora= (hora -12).toString()+'PM';
    }
    else
    {
        hora= hora.toString()+'AM';
    }
    var res1=hora+':'+dat.getMinutes().toString()+':'+dat.getSeconds().toString();

    switch (dia)
    {
        case 0: res='domingo';
            break;
        case 1: res='lunes';
            break;
        case 2: res='martes';
            break;
        case 3: res='miercoles';
            break;
        case 4: res='jueves';
            break;
        case 5: res='viernes';
            break;
        case 6: res='sabado';
            break;

    }
    console.log('el dia es:',res);
    console.log('la hora es:',res1);
}
console.log('number of words is ',countWords('hello word'));
