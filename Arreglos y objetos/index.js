// Los objetos y los arrays son las mejores opciones para representar una colección de datos
//ARREGLO: En lugar de crear 3 variables para diferentes colores por separado podemos hacer uso de arreglos.
const colors = ['Rojo', 'Morado', 'Azul'];
document.write(colors);
// Los arreglos están representados por corchetes y nos permiten agrupar n cantidad de valores, todos separados por coma. 
// Los arreglos pueden contener distintos tipos de datos, es decir, no necesariamente deben ser todos string o todos number. 
// Cada elemento de un arreglo cuenta con un identificador numérico llamado index que nos permite acceder al valor de dicho elemento.
const colorsNumber = ['Rojo', 'Morado', 'Azul', 55, 'Amazul', 'Verde']; //INDEX 0, 1,2,...
console.log(colorsNumber);
console.log(colorsNumber[5]); //Para poder leer o acceder a un elemento del arreglo colocamos el index dentro de corchetes. (azul)


// Los OBJETOS en JavaScript están representados por corchetes, dentro tenemos pares de propiedad y valor. Al igual que los arreglos,
// el valor de una propiedad puede ser cualquier tipo de dato, incluso arreglos u otros objetos.
// Puedes usar objetos cuando quieres agrupar características de algo y es necesario darle un nombre a dichas características.
var autoParts = {  //OBJETO
    auto: 'Honda',   //PROPIEDAD del OBJETO
    color: 'red',
    year: 2021
};
//Para acceder a un solo datos del objeto se usa un string con el nombre de la propiedad en lugar de un índice numérico
console.log(autoParts['auto'])    // 'Honda'
//También se puede escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
console.log(autoParts.year)     // '2021'
console.log(autoParts.year = 2020)
// let mensaje = `el nombre es ${autoParts.auto} y su color es ${autoParts.color}`
 


// Destructuring
// Destructuring es extraer valores o propiedades de un arreglo u objeto.
//Ejemplo con Arreglo
const flowersArrangement = ['Girasoles', 'Rosas', 'Orquídeas'];
// En este ejemplo que sigue estamos creando 3 variables (Girasoles, Rosas y Orquídeas) y asignando los valores del arreglo flowersArrangement. 
// Esta asignación se hace basándose en el index del arreglo.
const [Girasoles, Rosas, Orquídeas] = flowersArrangement;
console.log(Girasoles);  //los valores los convertimos en variables
console.log(Rosas);
console.log(Orquídeas);

//Podemos lograr lo mismo con objetos.
const person = {    //del lado derecho, son propiedades
    firstName: 'Leonardo',
    lastName: 'Guzmán',
    age: 24
};
 const {firstName, lastName, age} = person;  //del lado izquierdo son variables
 console.log(firstName, lastName);   //con eso creo VARIABLES, en lugar de mantener las propiedades


