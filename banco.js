
var cuenta;
var cuentas = new Array;
var nombre; 
var nombres = new Array;
var saldo=0;
var saldos = new Array;
var saldototal=0;


  do {

  	cuenta = prompt("Escribe el numero de cuenta: ");
  	cuentas.push(cuenta);
  	
  	if (cuenta >= 0){

  	nombre = prompt("Escribe el nombre: ");
  	nombres.push(nombre);
  	saldo = prompt("Escribe el saldo: ");
  	saldos.push(saldo);

  	if (saldo > 0) {
  		saldototal = saldototal + saldo;
  		document.write(nombre+' tiene saldo acreedor<br>');
  	}else{

  		if (saldo < 0) {

  			document.write(nombre+' tiene saldo deudor<br>');
  		}else{

  			document.write(nombre+' tiene saldo nulo<br>');
  		}
  	}

  	}

  }while (cuenta > 0);

  document.write('La suma total de saldos acreedores es: ' + saldototal);

