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

		var weatherImage = document.getElementById("weatherImage");
		weatherImage.innerHTML = ("Image");

		var weatherDesc = document.getElementById("weatherDesc");
		weatherDesc.innerHTML = (result.weather[0].description);

		var weatherTemp = document.getElementById("weatherTemp");
		weatherTemp.innerHTML = kelvinToFerenheit(result.main.temp) + "&#x2109";

		var weatherHigh = document.getElementById("weatherHigh");
		weatherHigh.innerHTML = kelvinToFerenheit(result.main.temp_max) + "&#x2109";

		var weatherLow = document.getElementById("weatherLow");
		weatherLow.innerHTML = kelvinToFerenheit(result.main.temp_min) + "&#x2109";
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