// Antes de ecmascript6
function Message(name, age, country){
    var name = name || "Joel";
    var age = age || 20;
    var country = country || 'Mx';
    console.log(name, age, country);
}

Message(); // Sin parametros enviados.
// Salida: Joel 20 Mx
Message("Julieta", 27, 'CO'); // Con parametros enviados.
// Salida: Julieta 27 CO

// En ecmascript6
function Message2(name="Joel", age= 20, country='MX'){
    console.log(name,age,country);
}

Message2(); // Salida: Joel 20 MX
Message2("Isadora",18,'CL'); // Salida: Isadora 18 CL

// -----------------------------------------------------------------------------------------------

// Template Literals (Concatenación).

let hello = "Hello";
let world = "World";

let phrase = hello + ' ' + world;
console.log(phrase);
// Salida: Hello World

let phrase2 = `${hello} ${world}`
console.log(phrase2);
// Salida: Hello World

// -----------------------------------------------------------------------------------------------

// Saltos de linea en Textos

    // Forma habitual antes de es6...
let lorem = "Este es un texto y esta es la primer linea del mismo, \nAhora esto es una segunda linea del Texto";
console.log(lorem); 
/* Salida:
    Este es un texto y esta es la primer linea del mismo, 
    Ahora esto es una segunda linea del Texto
*/ 


    // Forma de hacer estos saltos de linea en es6
let lorem2 = `Este es un texto usando el Acento grave,
Simplemente con dar enter hacemos un salto de linea.`;

console.log(lorem2);
    /* Salida:
    Este es un texto usando el Acento grave
    Simplemente con dar enter hacemos un salto de linea.
    */

// -----------------------------------------------------------------------------------------------

// Destructuración...

let person = {
name: "Joel",
age: '20',
country:'MX'
}

console.log(person.name, person.country); // Obtenemos los valores del objeto indicado.
// Salida: Joel MX

// Con es6 utilizando la Destructuración
let {name,age,country} = person; // Obtenemos los valores que tenemos en el objeto (Variable) indicado.
console.log(name, age); // Usamos los valores que queramos.
console.log(country); // Utilizando unicamente el valor de country.

// -----------------------------------------------------------------------------------------------

    // Operador de Propagación.

/*
    Este operador se implementa con los ... (tres puntos),
    nos ayudara a unir en una impresion los valores que ya teniamos en por ejemplo un arreglo.
*/

let team1 = ["Joel","Isadora", "Julieta", "Alazkin"];
let team2 = ["Carla","Sonia","Gustavo", "Aldair"];

console.log("Geremias" ,...team1, ...team2);
/*
    Salida:
    Geremias Joel Isadora Julieta Alazkin Carla Sonia Gustavo Aldair
*/

// -----------------------------------------------------------------------------------------------

    // Diferencia entre Var y Let.

    /*
        Var es una variable global,
        lo que quiere decir que puede ser accedida desde cualquier parte de nuestro codigo

        Let es una variable mas restringida
        unicamente se puede utilizar dentro de un bloque donde fue declarada.
    */

{
    var globalVar = "Alazkin";
}

{
    let globalLet = "La mejor raza"
    console.log(globalLet)
}

console.log(globalVar);
    /*
        console.log(globalLet); 
        Esta impresión es incorrecta debido a que la variable es let
        solo es accesible por el mismo bloque de codigo.
    */

// -----------------------------------------------------------------------------------------------

    // Constantes

var a = 'b';  //Permite asignale un nuevo valor.
let aa = 'bb';  //Permite asignale un nuevo valor.

a = 'a1';
aa = 'a2';

console.log(a); // Salida: a1
console.log(aa); // Salida: a2

const pi = 3.1416;
console.log(pi); // Salida: 3.1416

    /*
    pi = 3; <--- Esto es incorrecto debido a que no se permite asignarle un vnuevo alor por que es una constante.
    */