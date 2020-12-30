const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${ encodedUlr }`,
        headers: { 'x-rapidapi-key': '85884ab5dbmshdd27cc7bac5ced8p177e17jsndc8274761948' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.data;
    const name = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        name,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}