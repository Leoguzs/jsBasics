//Una función es un conjunto de sentencias que realizan una tarea o calculan un valor. En lugar de repetir el 
//mismo código una y otra vez, podemos crear una función la cual se puede llamar las veces que sea necesario.
// function suma (num1, num2) {
//     let resultado= num1+num2;  //Cuando vemos return en una función significa que va a retornar un valor al 
//     return resultado;          //final de la ejecución de la función. Este valor puede ser guardado en una variable.
// }
// document.write(suma(2,7));

// //Vamos a dar calcular la edad mediante una función que reciba el año de nacimiento.
// function calculateAge(birthYear) {
//     var age = 2020 - birthYear;
//     return age;
// }
// console.log(calculateAge(1987));
// //Ahora podemos llamar la misma función las veces que queramos sin necesidad de repetir las mismas líneas de código una
// //y otra vez. Las funciones también pueden llamar a otras funciones.
// var ageLeo= console.log(`Tu edad es de: ${calculateAge(1996)} años`); 

// //Funcion para que salude
// function saludo() {
// let estado = prompt('Cómo estas?');
// let señal = (estado=='bien') ? 'qué chido' : 'qué mal';
// alert (señal);
// }
// saludo();
// //Funcion para el mínimo
// function minimo (a,b) {
//     let operacion = Math.min(a, b);
//     console.log (`El valor mínimo es: ${operacion}`);
// }
// minimo(5,10);

// //Creando una función
// function potencia (num1, num2) {    //PARÁMETROS
//     let resultado= Math.pow(num1,num2);
//     return resultado;
// }
// console.log(`El resultado de la potenciación es: ${potencia(3, 3)}`);

//PARÁMETROS
let suma = function(num1, num2) {
    let resultado=num1+num2;
    return resultado;
}
 suma1= console.log( suma(5,7));
 suma2= console.log(suma(4,7));


 let vacunacion =  function() {    //No olvidar que la palabra "let" nos dice que el scope es local, con "var" es global
     let edad=prompt ('¿Cuál es tu edad?');
     let mensaje = (edad<18) ? `Aún NO te puedes vacunar, tienes ${edad} años`: 
     `Bienvenido a la vacunación, tu edad es ${edad} años`;
     alert(mensaje);
 }
 vacunacion();