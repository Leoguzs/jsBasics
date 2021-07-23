//Operadores de comparacion (comparan dos valores ==)
let num1 = 8, num2 = 8;
console.log(num1 == num2);

// != pregunta si los dos valores son distintos
let num3 = 8, num4 = 8;
console.log(num3 != num4); //me dice que es falso porque son iguales

// lo mis != pero con texto y numero
let texto = '5';
let num5 = 5;
console.log(texto != num5);  // no es diferente, a pesar de ser uno un string y el otro un número

// comparamos la igualdas que nos diga si son EXACTAMENTE idénticos con (===)
console.log(texto === num5); // es falso ahora sí porque  uno es un string y el otro un número

//le pregunto si texto es estrictamente distinto de num5 con !==
console.log(texto !== num5);

//mayor que, menor que, etc
console.log(num1 >= num2); //falso
console.log(num3 < num5);
console.log(Math.min(num3, num5));

//operadores lógicos nos devuelven un valor, siempre que se cumpla un valor
let valor1 = true, valor2 = true;
let numero1 = 9, numero2 = 4;

let afirmacion1 = numero1 < numero2;
let afirmacion2 = numero1 == numero2;
console.log(afirmacion1 || afirmacion2);

//el not lógico (!) regresa lo contrario
console.log(!afirmacion1);


//CONDICIONALES
// let numeroIngreso= prompt('Cuál es tu numero de ingreso');
// if (numeroIngreso  >=5){
//     alert('Hola');
// } else {
//     alert('Adiós');
// }

//CONDICIONALES
let par = 7;
if (par % 2 == 0) {
    document.write('el numero es par');
} else {
    document.write('el numero es impar');
}

//un programa que te muestra los numeras pares del 0 - 100
// for (par = 0; par <= 100; par++) {
//     if (par % 2 == 0) {
//         console.log(par);
//     }
// }

const time = 25;
let greeting;

if (time < 12) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
    greeting = "Good evening";
} else {
    greeting = 'wrong hour format';
}

console.log(greeting);

// Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
// a través de condicionales if realice las siguientes operaciones:
// - Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
// - Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
// - Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// - Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8,
//   con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
let diametroRueda = 1.5, grosorRueda = 0.3;

if (diametroRueda > 1.4) {
    console.log('La rueda es para un vehículo grande');
} else if (diametroRueda <= 1.4 && diametroRueda > 0.8) {
    console.log('La rueda es un vehiculo mediano');
} else if (diametroRueda < 0.8) {
    console.log('La rueda es para un vehículo pequeño');
} else if ((diametroRueda > 1.4 && grosorRueda < 0.4) || (diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25)) {
    console.log('El grosor para esta rueda es inferior al recomendado')
}

//aprender el switch
let horoscopo = 3;
let mensaje;

switch (horoscopo) {
    case (horoscopo = 1):
        mensaje = 'Venus';
        break;
    case (horoscopo = 2):
        mensaje = 'Tierra';
        break;
    default:
        mensaje = 'error';

}
console.log(mensaje);
//otro ejemplo del switch

// Operadores ternarios, en donde simplificamos dos opciones
// nos permite realizar una operación "if" "else", de una manera mas sencilla
// CONDICION ? RESULTADO_TRUE (si la CONDICION SE CUMPLE) :RESULTADO_FALSE
let edad = 18; //Este es el ejemplo de como lo he estado haciendo
if (edad >=18) {
    console.log(`La edad es: ${edad} y puede pasar`)
} else {
    console.log(`La edad es: ${edad} y NO puede pasar`)
}

let age=17;  //así se hace con un operador ternario, EJ1
let señalamiento= (age>=18) ? `La edad es: ${age} y puede pasar`: `La edad es: ${age} y NO puede pasar`;
console.log(señalamiento);
//así se hace con un operador ternario, EJ2
let genero = 'f';
let messaje = (genero == 'masculino') ? `El género es ${genero}`: `el genero No es masculino`;   
console.log(messaje);  



//cliclos (for y while) es un bloque de código que nos permite repetir instrucciones un numero definido o 
//indefinido de veces (1-declaras variavle; 2-condicion para indicar cuando detenerse; colocar aumento)
for (let contador=0; contador <=20; contador+2) {
    if (contador!=0) {
        console.log(contador);
    }
}



// for (let i=0; i<=100; i++) {
//     if (i%2==0) {
//         console.log (i);
//     }
// }

// for (let a=2; a<=100; a++) {   numero primo
//     if (a%2 ===0) {
//         console.log(a);
//     }
// }
