
//funcion pide nombres hasta que diga fin

function nombres(){
	return arguments.length;
}

var nombres = new Array;

var final = "fin";

do{
	nombre = prompt("Escribe nombres. Si escribes fin, se acabo: ")
	nombres.push(nombre);} 
while (nombre != "fin");

	for (var i = 0; i <nombres.length; i++) {
		document.write(nombres[i] + '<br>' )
	}


