
var accesorios = {
    rf1x1: {
        etiqueta: "Botellín de agua 0,5L",
        precio: 4.0
    },
    rf1x2: {
        etiqueta: "Botellín de agua 0,9L",
        precio: 5.0
    },
    rf2x1: {
        etiqueta: "Faro delantero",
        precio: 15.5
    },
    rf2x2: {
        etiqueta: "Faro trasero",
        precio: 12
    },
    rf2x3: {
        etiqueta: "Pack faros delantero y trasero",
        precio: 23.99
    }
}


var referencia;
var accesorio = " ";


 for (referencia in accesorios) {
     accesorio = accesorios[referencia];

     var node = document.createElement("option");                
     var textnode = document.createTextNode(accesorio);         
     node.appendChild(referencia);                             
     document.getElementById("accesorios").appendChild(node);
     
 }
