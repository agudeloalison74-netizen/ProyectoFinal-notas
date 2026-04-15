const aprendices = [
    {nombre: "Ana", nota: 4.5, programa: "ADSO"},
    {nombre: "Luis", nota: 3.2, programa: "ADSO"},
    {nombre: "Maria", nota: 4.8, programa: "ADSO"},
    {nombre: "Carlos", nota: 2.9, programa: "ADSO"},
    {nombre: "Sofia", nota: 4.0, programa: "ADSO"}
];

function menu() {
    let opcion = 0;

    while (opcion !== 8) {
     opcion = Number(prompt(`
        1. ver aprendices
        2: Aprobados
        3: Reprobados
        4. Mayúsculas
        5. Promedio
        6. Ordenar
        7. Clasificar nota
        8. Salir
     `));

        switch (opcion) {
            case 1:
                mostrarAprendices();
                break;

            case 2:
                aprobados();
                break;

            case 3:
                reprobados();
                break;
                
            case 4:
                nombresmayus();
                break;

            case 5:
                promedio();
                break;

            case 6:
                ordenar();
                break;

            case 7:
                calificarNota();
                break;

            case 8:
                alert("¡Hasta luego!");
                break;
                
            default:
                alert("Opción no válida, por favor intente de nuevo.");
        }   
    }
}
