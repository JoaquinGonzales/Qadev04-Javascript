//prueba de la funcion de readfile
var RadFileClass=require('./readFile2.js');
var read= new RadFileClass();
console.log('contend1','\n',read.readFile('d:\\nuevo\\uno.txt').toString());
console.log('contend2');
read.readFileAsync('d:\\nuevo\\unio.txt');