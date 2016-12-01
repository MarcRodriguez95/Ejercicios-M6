function cliente(nombre, saldo)
{
	this.nombre = nombre;

}

function depositar(dinero)
{
	this.saldo = this.saldo + dinero;
}

function extraer(dinero)
{
	this.saldo = this.saldo - dinero;
}

function sabercolordeojos()
{
	return this.colordeojos;
}
