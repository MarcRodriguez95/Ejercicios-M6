
var nombres = new Array;

function guardar() 
{
    var i;
    var x = document.getElementById('form1');
    for (i = 0; i < x.length; i++) {
    	if (x.elements[i].type == "text") {nombres.push(x.elements[i].value);}
    	
    }

}

function escribir(item, index)
{
	document.getElementById('hoja').innerHTML += item + '<br>';

	document.getElementById('hoja').style.color="#d32e12";
}

