

function caracter(correo)
{
	var arroba = new Array;
	
	arroba.push(correo);

	if (correo.indexOf('@') != -1) 
	{
		document.write('El correo exite');
	}else {
		document.write('No has introducido la @')
	}
console.log(arroba);
}

caracter('marcrodriguez@gmail.com');