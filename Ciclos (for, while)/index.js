//los ciclos son bloques de código que nos permiten realizar un conteo para saber en qué momento
//se realizará una accion
//for(declaras variables; declaras límite de conteo; declaras el aumento)
for (var contador=1; contador <10; contador++) {
    console.log(contador);
    }
    console.log('Fin del ciclo')
// reduciendo esta vez ejemplo
for (var i=5; i>=1; i--) {
    console.log(i)
}
console.log('Fin de ciclo')


//ciclos anidados (podemos tener ciclos dentro de ciclos, pero son menos eficientes)
// for (let i=1; i<=0; i++) {
//     console.log(`Empieza iteracion ${i}`)
//     for (let j = 0; j<4; j++) {
//         console.log(j);
//     } 
// }
// console.log('Fin del ciclo')

    // WHILE la sintaxis es diferente y el incremento debe ser dentro del ciclo while {}
var i= 5;
while (i<10) {
    console.log(i);
    i++;
}
console.log('Fin de ciclo');

let x=5; 
 while(x<10){
     console.log(x);
     x++;
}
console.log('Fin de ciclo');

var y=25;
while (y>13) {
    console.log(y--);
    
}

//con do while el codigo se ejecuta al menos una vez

//for se us acuando uno sabe el número de iteracione y while NO SE SABE del numero de iteraciones
//operador ternario
let edad=18;
let mensaje = (edad>=18) ? `Su edad es: ${edad} años, puede pasar`: `Su edad es: ${edad} años,  NO puede pasar`;
console.log(mensaje);