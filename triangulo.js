

var base;
var altura;
var superficie;
var x = 0;


for (var i = 1; i <= 3; i++) {

	base = prompt("Escribe la base del triangulo: ");
	altura = prompt("Escribe la altura del triangulo: ");
	superficie = base * altura / 2;

	if (superficie > 12) {

		x = x + 1;

	}

document.write('Triangulo ' + i  + '<br>');
document.write('la base del triangulo es: ' + base + '<br>');
document.write('la altura del triangulo es: ' + altura + '<br>');
document.write('la superficie del triangulo es: ' + superficie + '<br>' + '<br>');

}
document.write('Los triangulos con una superficie mayor a 12 es: ' + x);