const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function nombresmayus(){
    let resultado = aprendices.map( a=> a.nombre.toUpperCase());
    console.log("nombre en mayusculas:");
    console.log(resultado);

}