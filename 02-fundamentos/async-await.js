/**
 * Async Await
*/

// let getNombre = async() =>{
    
//     throw new Error('No existe un nombe para ese usuario');

//     return 'Julian'
// };

let getNombre = () => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve('Julián Async - Await');    
         }, 3000);        
     });
} 

let saludo = async () => {

    let nombre = await getNombre();
    return `Hola ${nombre}`


}


saludo().then((mensaje) => {
    console.log(mensaje);
}).catch((err) => {
    console.log('Error de ASYNC', err);
});

// console.log(getNombre());