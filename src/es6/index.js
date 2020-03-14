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