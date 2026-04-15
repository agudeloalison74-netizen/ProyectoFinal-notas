const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function mostrarAprendices() {
    console.log("Todos los aprendices:");
    console.table(aprendices);
}

function aprobados(){
    let resultado = aprendices.filter(a => a.nota >= 3.5); 
    console.log("Aprobados:");
    console.table(resultado);
}

function reprobados(){
    let resultadoReprobados = aprendices.filter(a => a.nota < 3.5);
    console.log("Reprobados:");
    console.table(resultadoReprobados);
}

function nombresmayus(){
    let resultado = aprendices.map(a => a.nombre.toUpperCase());
    console.log("Nombres en mayúsculas:");
    console.log(resultado);
}

function promedio(){
    let suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
    let prom = (suma / aprendices.length).toFixed(2);
    console.log("Promedio:", prom);
}

function ordenar(){
    let ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
    console.log("Ordenados de mayor a menor:");
    console.table(ordenados);
}

function calificarNota(){
    let nota = Number(prompt("Ingresar una nota"));
    switch (true){
        case nota < 3.0:
            console.log("Nivel: Bajo");
            break;
        case nota < 4.0:
            console.log("Nivel: Básico");
            break;
        case nota < 4.5:
            console.log("Nivel: Alto");
            break;
        default:
            console.log("Nivel: Superior");
    }
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Mostrar Aprendices\n" +
            "2. Ver Aprobados\n" +
            "3. Ver Reprobados\n" +
            "4. Nombres en Mayúsculas\n" +
            "5. Ver Promedio\n" +
            "6. Ordenar por Nota\n" +
            "7. Calificar una nota manual\n" +
            "0. Salir"
        );

        switch (opcion) {
            case "1": mostrarAprendices(); break;
            case "2": aprobados(); break;
            case "3": reprobados(); break;
            case "4": nombresmayus(); break;
            case "5": promedio(); break;
            case "6": ordenar(); break;
            case "7": calificarNota(); break;
            case "0": console.log("Saliendo..."); break;
            default: console.log("Opción no válida");
        }
    } while (opcion !== "0");
}