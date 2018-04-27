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


let getEmpleado = async(id) => {

        let empleadoDB = empleados.find( empleado => empleado.id === id);

        if(!empleadoDB){
            throw new Error(`No Existe un empleado con el ID ${id}`);
        }else {
            return empleadoDB;//Solo permiten el envío de un parametro
        }  

}

let getSalario = async(empleado) => {
    
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
        }else{
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }
        }    
}

let getInformación = async(id) => {
    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);
    
    return `${respuesta.nombre} tiene un salario de ${respuesta.salario}`;    
}


getInformación(3)
    .then((mensaje) => console.log(mensaje))
    .catch( err => console.log(err));