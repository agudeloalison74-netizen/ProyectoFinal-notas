const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function calificarNota(){
    let nota = Number(prompt("ingresar una nota" ));
    switch (true){
        case nota <3.0:
            console.log("nivel: bajo ");
            break;
        case notas < 4.0:
            console.log("nivel: basico");
            break;
        case nota <4.5:
            console.log("nivel: alto");
            break;
        default:
            console.log("nivel: superior");
        }
    }
