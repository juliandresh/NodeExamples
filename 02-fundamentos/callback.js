let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }

    if(id===70){
        callback(`El usuario con id ${id} no existe en la BD`);
    } else {
        callback(null, usuario);
    } 

} 

getUsuarioById(1, (err, usuario) => {

    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos ', usuario);

});



// function getUsuarioById (id, callback) {
//     let usuario = {
//         nombre: 'Fernando',
//         id
//     }
//     if(id===70){
//         callback(`El usuario con id ${id} no existe en la BD`);
//     } else {
//         callback(usuario);
//     }    
// }

// getUsuarioById(80, function callback(err, usuario)
// {
//     if(err){
//         return console.log(err);
//     }
//console.log('Usuario de base de datos ', usuario);
// });

