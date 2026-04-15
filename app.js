const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function promedio(){
    let suma= aprendices.reduce((acc,a)=> acc + a.nota,0);
    let prom =(suma / aprendices.length).tofixed(2);
    console.log("promedio:", prom);
}

function ordenar(){
    let ordenados= [...aprendices].sort((a,b)=> b.nota-a.nota);
    console.log("ordenados de mayor a menos:");
    console.table(ordenados);
}
