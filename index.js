/*----------------------------------- CLASE 3 ------------------------------------*/
/*----------------------------------- CLASE 3 ------------------------------------*/
/*----------------------------------- CLASE 3 ------------------------------------*/

// 1) Crea un bucle que por cada iteración muestre en consola un mensaje
// que diga en que número de iteración estamos.
// Tiene que mostrar desde la iteración 1 a la 50 inclusive.

// Nota : el mensaje en consola debe ser “user friendly”
// (Ej: “Estamos en la iteración número “número”)

// for (let index = 1; index <= 50; index++) {
//   console.log(`Estamos en la iteración número ${index}`);
// }

// const imprimirNumeros = (numero) => {
//   for (let index = 1; index <= numero; index++) {
//     console.log(`Estamos en la iteración número ${index}`);
//   }
// };

// imprimirNumeros(10);

// ------------------------------------------------------------------------------------------------------
// 2) Ahora vamos a hacer el camino inverso al camino anterior,
//  modificalo de manera tal que la iteración sea del 50 al 1.

// inicializaciòn;condición de corte;steps;

// const imprimirNumeros = (numeroInicial, numeroLimite) => {
//   for (let index = numeroInicial; index >= numeroLimite; index--) {
//     console.log(`Estamos en la iteración número ${index}`);
//   }
// };

// imprimirNumeros(20);

// Nota : el mensaje en consola debe ser “user friendly”
//  (Ej: “Estamos en la iteración número “número”)

// ------------------------------------------------------------------------------------------------------
// 3) Trabajemos con el bucle while. Creá una variable contador que,
//  mientras que el valor de contador sea menor a 20 ,
//   se aumente en uno con cada iteración. Imprimí en consola el valor
//    actual en cada una de las iteraciones. Finalmente,
//     Imprimí por consola el valor final de la variable contador

// const imprimirNumeros = (numero) => {
//   let contador = 1;
//   console.log(`El valor actual del contador es ${contador}`);

//   while (contador < numero) {
//     contador++;
//     console.log(`El valor actual del contador es ${contador}`);
//   }
// };

// imprimirNumeros(10);

// Nota : el mensaje en consola debe ser “user friendly”
//  (Ej: “El valor actual de contador es “número”)

// ------------------------------------------------------------------------------------------------------
// 4) Momento de agregar arrays a la práctica,
// Escribí un código en el cual crees un array con los números del
// 1 al 10 (Este array lo vamos a seguir usando en los próximos ejercicios )
//  y luego mediante el uso de un bucle, imprimí cada número en consola

// const numeros = [11, 2, 32, 4, 5, 65, 7, 8, 9, 12140];
// const numeros2 = [11, 2];

/*
0: 11,
1: 2,
2: 32 ....
*/
// const imprimirNumeros = (arrNumeros) => {
//   for (let index = 0; index < arrNumeros.length; index++) {
//     console.log(arrNumeros[index]);
//   }
// };

// imprimirNumeros(numeros);
// ------------------------------------------------------------------------------------------------------

// 5) Escribí un código que imprima por
// consola a todos los números del array multiplicados por (numero).
// const numeros = [11, 2, 5, 6, 7];
// const numeros2 = [11, 2, 32, 4, 5, 65, 7, 8, 9, 12140];

// const multiplicarNumerosPor = (arrayNumeros, numero) => {
//   for (let index = 0; index < arrayNumeros.length; index++) {
//     console.log(arrayNumeros[index] * numero);
//   }
// };

// multiplicarNumerosPor(numeros, 10);
// multiplicarNumerosPor(numeros2, 100);
// multiplicarNumerosPor(100000);

// ------------------------------------------------------------------------------------------------------
// 6) Escribí un bucle que imprima únicamente los primeros 5 números del array

// ------------------------------------------------------------------------------------------------------
// 7) Escribí un bucle que imprima todos los números del array menos el número 7.

// ------------------------------------------------------------------------------------------------------
// 8) Escribí un código que imprima por consola a todos los números
// pares del array de números.

// Pista: Podes utilizar el operador de modulo ( % )

// ------------------------------------------------------------------------------------------------------
/*----------------------------------- CLASE 4 ------------------------------------*/
/*----------------------------------- CLASE 4 ------------------------------------*/
/*----------------------------------- CLASE 4 ------------------------------------*/
// 1) Escribí una función que reciba como parámetro un nombre
//  y que imprima en consola “hola, soy {nombre} “.

// function imprimirNombreAlt(nombre) {
//   console.log(`Hola soy ${nombre}`);
// }

// const imprimirNombre = (nombre) => {
//   console.log(`Hola soy ${nombre}`);
// };

/* Cuando hay una sola linea de código */
// const imprimirNombre2 = (nombre) => console.log(`Hola soy ${nombre}`);

// imprimirNombre2("Nahue");
// imprimirNombre2("Naomi");
// imprimirNombre2("Mati");

// ------------------------------------------------------------------------------------------------------
// 2) Escribí una función que imprima en consola
//  la suma de dos números pasados por parámetro.

// function suma(num1, num2) {
//   return num1 + num2;
// }

// const sumaAlt = (num1, num2) => {
//   return num1 + num2;
// };

// const sumaAlt2 = (num1, num2) => num1 + num2;

// console.log(suma(2, 2));
// console.log(sumaAlt(suma(2, 2), 2));
// console.log(sumaAlt2(suma(2, sumaAlt(2, 2)), 20));

// 3) Escribí una función que reciba dos números por parámetro,
// multiplique a cada uno por dos
//  y luego imprima por consola la suma de ambos números multiplicados.

// function sumarMultiplicados(num1, num2, multiplicador) {
//   return num1 * multiplicador + num2 * multiplicador;
// }

// const sumarMultiplicadosAlt = (num1, num2, multiplicador) => {
//   return num1 * multiplicador + num2 * multiplicador;
// };

// const sumarMultiplicados3 = (num1, num2, multiplicador) =>
//   num1 * multiplicador + num2 * multiplicador;

// console.log(sumarMultiplicados3(2, 4, 10));

// ------------------------------------------------------------------------------------------------------
// 4) Escribí una función que pueda recibir un número como parámetro
// y que imprima por consola la tabla de multiplicación del 0 al 10 de ese
//  número. Se debe mostrar de la siguiente manera: “ (número)
//  multiplicado por (número actual de la tabla) es igual a (resultado) “

// ------------------------------------------------------------------------------------------------------
// 5) Escribí una función que reciba dos números por parámetro y
//  que imprima por consola todo el intervalo entre ambos números,
//   incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse
//    en consola los números “1” , “2” y “3”.
//  Sin son iguales, que se imprima “Ambos números son iguales”.

// 6) Escribí las siguientes funciones:

// - Escriba las funciones “sumar” , “restar” , “multiplicar” “dividir”
// que puedan recibir dos parámetros e imprima en consola el resultado
// de la operación matemática correspondiente
// - Escriba una función que reciba dos números y una función
// como parámetros y que muestre en consola el resultado correspondiente
//  a la operación matemática pasada como parámetro.

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const hacerOperacion2 = (num1, num2, operacion) => operacion(num1, num2);

// console.log(sumar(2, 2));
// console.log(restar(2, 2));
// console.log(multiplicar(2, 10));
// console.log(dividir(10, 5));
// console.log(hacerOperacion2(10, 10, sumar));
// console.log(hacerOperacion2(10, 10, restar));
// console.log(hacerOperacion2(10, 10, multiplicar));
// console.log(hacerOperacion2(sumar(10, 10), 10, dividir));
