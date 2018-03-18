const request = require('request');

var geocodeAddress = (address, callback) => {
	 var encodeAddress = encodeURIComponent(address);  //or argv.address

	request({
		url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeAddress,
		json: true
	}, (error, response, body) => {
		if (error) { 
			callback('Unable to connect');
		}
		else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find the address');
		}
		else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				lng: body.results[0].geometry.location.lng
			});
			
		}
	});

};

module.exports.geocodeAddress = geocodeAddress;