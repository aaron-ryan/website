function parseWeatherData(){
	
}

function success(position){
	var crd = position.coords;
	lat = crd.latitude;
	lon = crd.longitude;
	url = `http://api.weatherapi.com/v1/current.json?key=53c92834b9b241abb53214814211803&&aqi=no&q=${lat},${lon}`;
	//json = $.getJSON(url,parseWeatherData);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


function getWeather(){
	navigator.geolocation.getCurrentPosition(success,error);
	setTimeout("renderTime()", 1000);
}

console.log("Weed pussy");
getWeather();