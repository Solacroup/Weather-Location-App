const fetchForecast = require('./forecast.js');

const axios = require('axios');

const fetchCity = async (cityName) =>{
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=fecb63f5e33ead6599ddb965cb4f41bf`;
    try{
        const {data} = await axios(url);
        const lat = data[0].lat;
        const lon = data[0].lon;
        //console.log(data[0].lat, data[0].lon);
        return fetchForecast(lat, lon);
    }catch(err){
        console.log(err.message);
    }
}

//fetchCity(process.argv[2]);

module.exports = fetchCity;