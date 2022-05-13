const { guardarTarea } = require("./funcionesDeTareas");
const archivo = require("./funcionesDeTareas");
let arrayTareas = archivo.leerArchivo();
let opcionDelUsuario = process.argv[2];


switch (opcionDelUsuario) {
    case "listar":
        arrayTareas.forEach(function (argumento) {
            console.log(argumento);
        });
    
        break;
        /* for (let contador = 0; contador < arrayTareas.length; contador++) {
            console.log(arrayTareas[contador])
        }
        break; */

    case "crear":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        let tarea = {
            titulo: titulo,
            estado: estado
        };
        archivo.guardarTarea(tarea);
    break;
    
    case "filtrarPorEstado":
        let estadoFiltrado = process.argv[3];
        let arrayFiltrado = archivo.leerPorEstado(estadoFiltrado);
        console.log(arrayFiltrado);

    break;

    case undefined: 
        console.log("Tienes que pasar una accion")
        console.log("Las acciones disponibles son: listar");
        console.log("-------------------------------------");
        break;
    default:
        console.log("No entiendo que quieres decir")
        console.log("Las acciones disponibles son: listar");
        console.log("-------------------------------------");
}

