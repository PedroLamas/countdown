jQuery(document).ready(function() {
	var targetDate = new Date("October 29, 2012 10:00:00 UTC");
	var remaining = parseInt((targetDate - new Date()) / 1000);
	
	var remaining2 = remaining % 86400;
	var days = (remaining - remaining2) / 86400;
	remaining = remaining2;
	
	var remaining2 = remaining % 3600;
	var hours = (remaining - remaining2) / 3600;
	remaining = remaining2;
	
	var seconds = remaining % 60;
	var minutes = (remaining - seconds) / 60;
	
	startTime = (days > 9 ? '' : "0") + days;
	startTime += (hours > 9 ? '' : "0") + hours;
	startTime += (minutes > 9 ? '' : "0") + minutes;
	startTime += (seconds > 9 ? '' : "0") + seconds;
	
	//alert(startTime);
	
	$(".digits").countdown({
		image: "images/digits.png",
		format: "ddhhmmss",
		startTime: startTime
	});
});