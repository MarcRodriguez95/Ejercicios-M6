//Crear un array de palabras que encuentre y imprima la mas larga.

var nombres = ["Marc", "asf", "aegewwgf", "AFEfefefaf", "efefaege"];

function palabra(){
  return 'La longitud del arguemnto es ' + arguments[0];
  return arguments.length;
   
}


var i = 0;
var x = 0;

do{
	nombre = prompt("Escribe nombres: ");
	nombres.push(nombre);
	i++;
	} 
while (i < 5);

	for (var x = 0; i <nombres.length; x++) {
		document.write(palabra)
	}
	