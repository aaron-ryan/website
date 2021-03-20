// Returns a value of fahrenheit to the 10ths place
function kelvinToFerenheit(temp){
	return Math.round((temp - 273.15) * 9/5 + 32);
}

function success(position){
	var crd = position.coords;
	lat = crd.latitude;
	lon = crd.longitude;
	url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b7f16ac59dc7990c7c7a4cbd99dc59d4`
	var weatherJSON = $.getJSON(url,function(result){
		console.log("Weather data downloaded successfully.");
		console.log(kelvinToFerenheit(result.main.temp));
	});	
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


function getWeather(){
	navigator.geolocation.getCurrentPosition(success,error);
	setTimeout("renderTime()", 30000);
}

console.log("Weed pussy");
getWeather();