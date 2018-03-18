const request = require('request');
const api = '60efa291193fd4c5c04ce3cbecb110b3';

var getWeather = (lat, lng, callback) => {
	 

	request({
		url: 'https://api.darksky.net/forecast/'+ api + '/' + lat.toString() + ',' + lng.toString() ,
		json: true
	}, (error, response, body) => {
		if (error) { 
			callback('Unable to connect to forecast.io server');
		}
		else if (response.statusCode === 400) {
			callback('Unable to fetch Weather');
		}
		else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature 
			});
			
		}
	});

};

module.exports.getWeather = getWeather;