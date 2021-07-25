/* console.log('fff');


var edad = 3;
console.log(edad);
edad =34;
 */
/* let saludo= prompt('Hola ¿cuál es tu nombre?');
alert('Hola '+ saludo); */

/* Concatenando texto */
/* let saludo ='Hola, Leonardo ',
	pregunta ='¿Cómo estás?';
	document.write(saludo + pregunta); */
/* Concatenando dos numeros */
/* let numero1 = '3',
	numero2 = 7;
	frase= ''+ numero1+numero2;
	document.write(frase); */

	/* let frase1 = 'El viento se llevó todo, ', // control + alt + } para esas comillas
		frase = `${frase1} soy Leonardo`;
	
	document.write(frase); */

	/* un booleano */
/* let edad =27;
if (edad>=18 ) {
console.log ('Aceptado');
} else {
	console.log('Rehazado');
} */

/* esta es una función */
/* function mostrarMensaje (){
	document.write('Hola bb');
}
mostrarMensaje (); */

//Funcion de cuadrado
/* let number;
function square(number) {
	return number * number;
  }
  document.write(square (5)); */

//funcion con texto
/* function saludo () {
	document.write('Binevenido a mi página');
}
saludo (); */

// función anónima
let saludo = function () {
	document.write('Hola esta es una funcion anonima');
}
saludo ();

/* let numero1 =10, numero2=2;
 
 resultado = -numero1;
document.write (resultado) */

var a = 5, b = 10, c = 15;
document.write((3 + b)*c/a*2);
document.write(((a+b*c)/5)*2);



/* function suma (numero1, numero2) {
	return numero1 + numero2;
}

console.log(suma(4,8)); */

//Entendiendo el return 
function resta (num1, num2) {
	var resultado = num1-num2;
	return resultado;

}
console.log (resta (85, 8));
