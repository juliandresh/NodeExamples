let empleado = [{
    id: 1, 
    nombre: 'Fernando'
},{
    id: 2, 
    nombre: 'Julian'
},{
    id: 1, 
    nombre: 'Liliana'
}];

let salario = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
}
