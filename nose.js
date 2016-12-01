

function saludopersonal(nombre) 
{
	var hola = 'Hola';
	function saludo(hola)
	{
		return hola + nombre;
	}
	return saludo;
}

var dihola = saludopersonal("marc");

console.log(dihola);


//Otro

var heroe={raza:'Tortuga', trabajo : 'Ninja'};
heroe.raza
heroe['raza']

var perro = {nombre: 'Benji', ladrar:function()
	{
		alert('GUAU');
	}
}

perro.nombre

perro.ladrar()