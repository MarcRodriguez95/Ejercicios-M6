//clase rectangulo con lado1 lado2.
//metodo area y perimetro.


function rectangulo(lado1, lado2)
{
	this.lado1 = lado1;
	this.lado2 = lado2;
}

function area()
{
	return this.lado1 * this.lado2;
}

function perimetro()
{
	return (this.lado1 * 2) + (this.lado2 * 2);
}

