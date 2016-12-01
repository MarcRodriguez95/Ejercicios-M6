
var numero;
var negativo = 0;
var positivo = 0;
var multiple = 0;
var par = 0;

for (var i = 1; i <= 10; i++) {

	numero = prompt("Escribe un numero entero: ");
	numero=parseInt(numero);
	if (numero < 0) {

		negativo++;		
	} else {
		if (numero > 0) {

			positivo++;
		}
	}

	if (numero%15 == 0 && numero != 0 ) {

		multiple++;
	}
	if (numero%2 == 0) {

		par=par+numero;
	}

}

document.write('Cantidad de numeros negativos: ' + negativo + '<br>');
document.write('Cantidad de numeros positivos: ' + positivo + '<br>');
document.write('Cantidad de multiples de 15: ' + multiple + '<br>');
document.write('El valor total de los numeros ingresados que son pares: ' + par + '<br>' + '<br>');