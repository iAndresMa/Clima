const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=10fa2ca06c60420124504fe6366205d5&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}