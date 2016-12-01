//escribir la clase mathUtils.
//hacer funciones: +,-,*, /.

MathUtils = function();
MathUtils.prototype.sum = function(num1, num2){
	return num1 + num2;
}

MathUtils.prototype.multiply = function(num1, num2){
	return num1 * num2;
}

MathUtils.prototype.substract = function(num1, num2){
	return num1 - num2;
}

MathUtils.prototype.divide = function(num1, num2){
	return num1 / num2;
}

MathUtils.prototype.average = function(num1, num2){
	return (num1 + num2) / 2;
}