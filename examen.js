var lista1 = [2, 4, 8];
var lista2 = [2, 4, 8];


var i = 0;
var x = 0;
var resultado = 0;
var resultado2 = 0;

function resultados()
{

	for(i=0;i<lista1.length;i++) 
		{
			resultado+=lista1[i];
			
		} 

	for(x=0;x<lista2.length;x++) 
		{
			resultado2+=lista2[x];

		} 


		if(resultado > resultado2) 
		{
			alert("Llista 1 més gran");
		}
		if(resultado < resultado2) 
		{
			alert("Llista 2 més gran");
		}
		if(resultado === resultado2)
		{
			alert("Llistes iguals");
		}
	
}


//Ejercicio numero 2, tabla de multiplicar
var e = 0; 
function multiplicar() {
       var numero = prompt("dime un número del uno al diez")
       numero = Number(numero)
       var texto = document.getElementById("multi")
       if (numero < 1 || numero > 10) {
           alert("El número que me has dado no está entre el 1 y el 10. Añade un numero que este en ese rango.")
           
           }	
       else {
           
           texto.innerHTML += "<h2>Tabla de multiplicar del numero" + numero + ". </h2>"
           document.write("<table border='1px', border-radius='2px' >  <tr> <td> Producto </td> <td>Resultado</td> </tr>");
           for (e = 1; e <= 10; e++) {

               document.write("<tr>" +"<td>" + numero + " x " + e + " </td> "+ "<td>" + numero*e +"</td>" + "</tr>");
               
               }  
               document.write("</table>");
           } 
        }

//Ejercicio numero 3, dia/mes/año




function productos() 
{
	
	var numero_producto = new Array ();
	var resultado_final = 1;
	numeros = prompt("Escribe el numero que quieras");


    for (i = 0; i < numeros.length ; i++) {
 		numeros[i] = parseInt(numeros[i]);
    	numero_producto.push(numeros[i]);
    	resultado_final = resultado_final * numero_producto[i];
    	
    }

  document.write(resultado_final);

}
  

function fecha(){

	  dias = prompt('Escribe una fecha');

      if(fecha(dias)){
            alert("La fecha introducida es correcta.");

      }else{
            alert("La fecha introducida no existe.");
      }
      var fecha = dias.split("-");
      var dia = fecha[0];
      var mes = fecha[1];
      var any = fecha[2];
      var fecha_entera = new Date(any,mes,dia);
      if (mes <= 12 && dia <=31 && any <= 2500)
      {
      	return true;
      	document.write("Fecha correcta");
      }
      else
      {
      	return false;
      	document.write("Fecha incorrecta");
      }
}





