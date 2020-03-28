const rp = require('request-promise')

module.exports = async function(city = '',) {
    if(!city) {
        throw new Error('Название города не может быть пустым!')
    }
    const key = 'ebb7731dc72021fb2e7c76f17570912e'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,
        qs: {
            appid: key,
            q: city,
            units: 'imperial'
        },
        json: true
    }
    try {
      const data = await rp(options)
      const celsius = (data.main.temp - 32) * 5/9
      
      return {
        weather: `${data.name}: ${celsius.toFixed(0)}`,
        error: null
      }
    } catch (error) {
      // console.log(error)
      return {
        weather: null,
        error: error.error.message
      }
    } 
 
}

 
 