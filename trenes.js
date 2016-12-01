 var TotalTrains = 12;
 var TrainsOperational = 8;


for (var train = 1; train <= TotalTrains; train ++)
{
	if (train <= TrainsOperational) {
	console.log("El tren numero "+ train + " esta operativo");
	}else
	{
		console.log("El tren numero "+ train + " no esta operativo");
	}
}

var txt;
var r = confirm("Quieres un tren? ");
if (r == true) {
    txt = "Pues compralo";
    console.log(txt);
} else {
    txt = "Pues nada";
    console.log(txt);
}

var nombre = prompt("Como te llamas? ");
console.log("Hola " + nombre);

var a = parseInt("40");
console.log(a);


function prueba(){
  return 'La longitud del arguemnto es ' + arguments[0];
  return arguments.length;
   
}

console.log( prueba( 'holaaa', 'buenass','mare meva' ) ); 

//Pedir al usuario 5 nombres, que meteremos en una array. Y los imprimimos.

var miArray = new Array(5) 

for (var i = 5; i >= 0; i--) {
	document.writeln(prompt("Pon 5 nombres: "))

}

//funcion invocar y sumar retorna a+b(funciones) 

function a1(){
	return 1;
}

function a2(){
	return 2;
}
document.write();
document.write();
