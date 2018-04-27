let empleados = [{
    id: 1, 
    nombre: 'Fernando'
},{
    id: 2, 
    nombre: 'Julian'
},{
    id: 3, 
    nombre: 'Liliana'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);

        if(!empleadoDB){
            reject(`No Existe un empleado con el ID ${id}`);
        }else {
            resolve(empleadoDB);//Solo permiten el envío de un parametro
        }
    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    });
}

getEmpleado(3).then((empleado) => {
    getSalario(empleado).then((result) => {
        console.log(`El salario del empleado ${result.nombre} es ${result.salario}`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});