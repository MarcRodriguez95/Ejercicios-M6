function mayor()
{
	var num = document.form1.numero.value;

	var num2 = document.form1.numero2.value;

	if (num > num2) {

		alert ('El numero ' + num + ' es mayor')
	}else if (num2 > num) {
		alert ('El numero ' + num2 + ' es mayor')
	}

}