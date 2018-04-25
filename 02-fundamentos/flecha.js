
// function sumar (a,b) {
//     return a + b;
// }


//let sumar = (a,b) => a + b; // Es como si retornara a + b en la misma línea


// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola Mundo con flecha';

// let saludar = (nombre) => `Hola ${ nombre }`;

// console.log(saludar('Fernando'));

// console.log(saludar());

// //console.log(sumar(10,20));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());