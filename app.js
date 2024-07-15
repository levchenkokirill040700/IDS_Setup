const axios = require('axios');
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// ubicacion.getciudadLatLon(argv.nombre)
//     .then(console.log)

clima.getClima(-0.19, -78.5)
    .then(console.log)