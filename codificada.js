//funcion llamada codificar llamada , recibe string y retorna la version codificada. 
//Sustituye 7 en lugar de T, 4 en lugar de A, 5 en lugar de S, 0 En lugar de O.

	
    function cambiar(palabra)
    {
        var nuevaPalabra = "";
        for (var i = 0; i < palabra.length; i++) {
            var letra = palabra[i];
            if (letra=="T") {
               nuevaPalabra=nuevaPalabra+"7";
            }else if(letra=="A"){
                nuevaPalabra=nuevaPalabra+"4";
            }else if(letra=="S"){
                nuevaPalabra=nuevaPalabra+"5";
            }else if(letra=="O"){
                nuevaPalabra=nuevaPalabra+"0";
            }else{
            	nuevaPalabra=nuevaPalabra+letra;
            }


        }
console.log(nuevaPalabra);
    }
   cambiar('HOLA AMIGO');

    function invoca(a,b){return a() + b();}
    function uno(){return 1;}
    function dos(){return 2;}
    console.log(invoca(uno,dos));