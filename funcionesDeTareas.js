const fs = require('fs');

let archivoTareas = {
    archivo: "tareas.json",

    leerArchivo: function () {
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    },

    escribirJSON: function(tareas){
        let formatoJSON = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, formatoJSON);
    },

    guardarTarea: function (objetoTarea) {
        let jsonTareas = leerArchivo();
        jsonTareas.push(tarea);
        this.escribirJSON(jsonTareas);
    }
}
module.exports = archivoTareas;