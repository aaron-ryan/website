function renderTime(){
	var mydate = new Date();
	var year = mydate.getYear();
		if(year < 1000){
			year +=1900;
		}
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray =  new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursmis,","Friday,","Saturday,");
	var montharray = new Array("January,","February,","March,","April,","May,","June,","July,","August,","September","October","November","Decemeber");
	// date end
	
	//time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var ampm = h >= 12 ? 'PM' : 'AM';
		if(h > 12){
			h -= 12 ;
		} else if(h === 0){
			h = 12;
		}
		if(m < 10){
			m = "0" + m;
		} 
		
		var myClock = document.getElementById("clockDisplay");
		myClock.innerHTML = "" +h+ ":" +m+ " "+ ampm + "\n" + dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;

		setTimeout("renderTime()", 1000);
}

renderTime();

