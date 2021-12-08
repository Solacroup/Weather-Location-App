const axios = require('axios');

const fetchForecast = async (lat, lon)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fecb63f5e33ead6599ddb965cb4f41bf`;
    try{
        const {data} = await axios(url);
        const temp = (data.main.temp-273.15);
        const cloud = (data.weather[0].description);
        //console.log(temp.toFixed(1), cloud);
        console.log(`The temperature is currenty at ${temp.toFixed(1)} °C and the weather type is ${cloud}`);
    }catch(err){
        console.log(err.message);
    }

}



module.exports = fetchForecast;