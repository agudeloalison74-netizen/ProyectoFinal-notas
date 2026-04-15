const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function aprobados(){
    let resultado = aprendices.filter (a=>a,nota >= 3,5);
    console.log("aprobados:");
    console.table(resultado);

}

function reprobados(){
    let reprobados = aprendices.filter (a=> a.nota <3,5);
    console.log ("reprobados:");
    console.table(resultado);

}

