const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(
//         console.log
//     )

// clima.getClima(42.5, 1.5)
//     .then(
//         console.log
//     )

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinarl el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log);