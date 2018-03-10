var desiredMonth = '';
$(document).ready( function () {
	
	var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	//var start = 1; // change back to 1900
	//var startDay = 1; // change back to 1
	var stringMonth = "";
	var stringYear = "";
	//var input = prompt("Do you want to see a month or a year?");
	var input = "082016"//prompt("Enter month and year: \n\n\nmmyyyy"); // How do you use the search box to 
	
	
	var monthInput = input[0] + input[1];
	monthInput = parseInt(monthInput);
	var yearInput = input[2] + input[3] + input[4] + input[5];
	var intYearInput = parseInt(yearInput);
	var newMonthInput = monthInput;
	var newYearInput = intYearInput;
	
	
	while((intYearInput < 1) || (input.length > 6) || (monthInput < 1) || (monthInput > 12)){ 
		if (monthInput > 12 || monthInput < 1){
			alert("The numbers of the month can only be between 1-12");
		}
		else {
			alert("Valid Range is between year 1-9999 \(inclusively\)");			
		}
		input = prompt("Enter a date: \n\nmmyyyy");
		monthInput = input[0] + input[1];
		monthInput = parseInt(monthInput);
		yearInput = input[2] + input[3] + input[4] + input[5];
		intYearInput = parseInt(yearInput);
	}
	

	
	function calendarMonth(bb){
		var month = bb[0] + bb[1];
		var year = bb[2] + bb[3] + bb[4] + bb[5];
		var start = 1; // change back to 1900
		var startDay = 1;
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		month = parseInt(month);
		year = parseInt(year);
		
		
		var currentWeekday = "";
		var monthLimit = 12;
		var lastMonth = [];


		
		
		while (start <= year){
			var monthCounter = 1;
			var monthIndex = 0;
			if ((start % 100 === 0) && (start % 400 != 0)){
				daysInMonths[1] = 28;
			}
			else if (start % 4 === 0){
				daysInMonths[1] = 29;
			}
			else{
				daysInMonths[1] = 28;
			}
			if (start == year){
				monthLimit = month;
			}
			while (monthCounter <= monthLimit){
				var dayCounter = 1;	
				while (dayCounter <= daysInMonths[monthIndex]){
					currentWeekday = weekdays[startDay];
					if ((start === year) && (monthLimit === monthCounter)){
						lastMonth.push(currentWeekday);
					}
					startDay = startDay + 1;
					if (startDay == 7){
						startDay = 0;					
					}
					dayCounter = dayCounter + 1;
				}
				monthCounter = monthCounter + 1;
				monthIndex = monthIndex + 1;
			}
			start = start + 1;
		}
		var first = lastMonth[0];
		var o = 0;
		var yy = 0;
		var vv = 1;
		while (o < weekdays.length){
			if (first == weekdays[o]){
				yy = o; 
			}
			o = o + 1;
		}
		o = 0;
		var ll = 0; 
		while (o < 42){ 
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('caption').text(months[(month-1)] + ", " + year);
		return ll;
	}
	
	
	// year2year js file
	
	
	//fillWeekdays(); 
	
	
	
	// link is visible to the user cursor: pointer 
	//MAIN METHOD
	
	
	
	
	

	
	var currentDate = new Date();
	var dd = currentDate.getDate();
	var currentMonth = (currentDate.getMonth()+1) + '';
	newMonthInput = parseInt(currentMonth);
	newYearInput = parseInt(currentDate.getFullYear());
	var currentYear = currentDate.getFullYear();
	if (currentMonth.length == 1){
		currentMonth = '0' + currentMonth;
	}
	var input = currentMonth + currentDate.getFullYear() + '';
	
	desiredMonth = input;
	
	var pop = calendarMonth(desiredMonth);
	
	var strMonth = desiredMonth[0] + desiredMonth[1];
	var i = input.length - 1;
	var strYear = '';
	while (i > 1){
		strYear =  desiredMonth[i] + strYear;
		i = i - 1;
	}
	
	if ((currentMonth == strMonth) && (currentYear == strYear)){
		var i = 0;
		while (i < 38){
			if (dd == $('td').eq(i).text()){
				var todaysDate = i;
				i = 44;
			}
			i = i + 1;
		}
		$('td').eq(todaysDate).addClass('today')
	}
	else{
		$('td').removeClass('today');
	}
	
	
	
	
	
	
	var url = window.location.href;
	var i = url.length-1;
	var cc = '';
	while (i >= 0){
		if (url[i] == '='){
			i = -1;
		}
		else{
			cc = url[i] + cc;
		}
		i = i - 1;
	}
	
	if (cc != url){ //checking to see if the selected month has been changed from the previous URL
		desiredMonth = cc;
		pop = calendarMonth(desiredMonth);
		var strMonth = desiredMonth[0] + desiredMonth[1];
		var i = input.length - 1;
		var strYear = '';
		while (i > 1){
			strYear =  desiredMonth[i] + strYear;
			i = i - 1;
		}
		
		if ((currentMonth == strMonth) && (currentYear == strYear)){
			var i = 0;
			while (i < 38){
				if (dd == $('td').eq(i).text()){
					var todaysDate = i;
					i = 44;
				}
				i = i + 1;
			}
			$('td').eq(todaysDate).addClass('today')
		}
		else{
			$('td').removeClass('today');
		}
		input = cc;
		newMonthInput = input[0] + input[1];
		newMonthInput = parseInt(newMonthInput);
		var i = 2;
		var newYearInput = '';
		while (i < input.length){
			newYearInput = newYearInput + input[i];
			i = i + 1;
		}
		newYearInput = parseInt(newYearInput);
		console.log(input);
	}
	
	
	
	
	
	$('#mySearch').keypress( function() { //method only allows user to type numbers
		i = 0;
		var nums = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
		var key = event.keyCode;
		if (key == 13){
			desiredMonth = $(this).val();
			pop = calendarMonth(desiredMonth);
			var strMonth = desiredMonth[0] + desiredMonth[1];
			var i = input.length - 1;
			var strYear = '';
			while (i > 1){
				strYear =  desiredMonth[i] + strYear;
				i = i - 1;
			}
			
			if ((currentMonth == strMonth) && (currentYear == strYear)){
				var i = 0;
				while (i < 38){
					if (dd == $('td').eq(i).text()){
						var todaysDate = i;
						i = 44;
					}
					i = i + 1;
				}
				$('td').eq(todaysDate).addClass('today')
			}
			else{
				$('td').removeClass('today');
			}
			//ensuring there aren't extra unused rows in the month
			if (pop == 27){
				$("#lastRow").css("display", "none");
				$("#secondLastRow").css("display", "none");
			}
			else if (pop < 35){
				$("#secondLastRow").fadeIn(1);
				$("#lastRow").css("display", "none");
			}
			else{
				$("#lastRow").fadeIn(1);
				$("#secondLastRow").fadeIn(1);
			}
			if ($(this).val() == '129999'){
				$("#next").css("display", "none");
			}
			else{
				$("#next").fadeIn(1);
			}
			if ($(this).val() == '129999'){
				$("#next").css("display", "none");
			}
			else{
				$("#next").fadeIn(1);
			}
			if (($(this).val() == "011") || ($(this).val() == "0101") || ($(this).val() == "01001") || ($(this).val() == "010001")){
				$("#previous").css("display", "none");
			}
			else{
				$("#previous").fadeIn(1);
			}	
			newMonthInput = parseInt($(this).val()[0] + $(this).val()[1]);
			newYearInput = parseInt($(this).val()[2] + $(this).val()[3] + $(this).val()[4] + $(this).val()[5]);
		}
		while (i < nums.length){
			if (key == nums[i]){
				return true;
			}
			if (i == 9){
				return false;
			}
			i = i + 1;
		}
	});

	
	if (input != "011"){
		$('#previous').fadeIn(1);
	}
	if (input != "129999"){
		$('#next').fadeIn(1);		
	}	
	
	

	
	
	$('#previous').click( function() {
		if (newMonthInput == 1){
			newMonthInput = 12;
			newYearInput = newYearInput - 1;
		}
		else{
			newMonthInput = newMonthInput - 1;
			newYearInput = newYearInput;
		}
		stringMonth = newMonthInput + "";
		stringYear = newYearInput + "";
		input = stringMonth + stringYear;
		if (stringMonth.length == 1){
			stringMonth = "0" + stringMonth;
			input = stringMonth + stringYear;
		}
		console.log(input);
		if (input == "011"){
			$(this).css("display", "none");
		}
		else if (input != "129999"){
			$('#next').fadeIn(1);
		}
		desiredMonth = input;
		pop = calendarMonth(desiredMonth);
		var strMonth = desiredMonth[0] + desiredMonth[1];
		var i = input.length - 1;
		var strYear = '';
		while (i > 1){
			strYear =  desiredMonth[i] + strYear;
			i = i - 1;
		}
		
		if ((currentMonth == strMonth) && (currentYear == strYear)){
			var i = 0;
			while (i < 38){
				if (dd == $('td').eq(i).text()){
					var todaysDate = i;
					i = 44;
				}
				i = i + 1;
			}
			$('td').eq(todaysDate).addClass('today')
		}
		else{
			$('td').removeClass('today');
		}
		if (pop == 27){
			$("#lastRow").css("display", "none");
			$("#secondLastRow").css("display", "none");
		}
		else if (pop < 35){
			$("#secondLastRow").fadeIn(1);
			$("#lastRow").css("display", "none");
		}
		else{
			$("#lastRow").fadeIn(1);
			$("#secondLastRow").fadeIn(1);
		}
	});
	
	$('#next').click( function() {
		if (newMonthInput == 12){
			newMonthInput = 1;
			newYearInput = newYearInput + 1;
		}
		else{
			newMonthInput = newMonthInput + 1;
			newYearInput = newYearInput;
		}
		stringMonth = newMonthInput + "";
		stringYear = newYearInput + "";
		input = stringMonth + stringYear;
		if (stringMonth.length == 1){
			stringMonth = "0" + stringMonth;
			input = stringMonth + stringYear;
		}
		if (input == "129999"){
			$(this).css("display", "none");
		}
		else if (input != "011"){
			$('#previous').fadeIn(1);
		}
		console.log(input);
		desiredMonth = input;
		pop = calendarMonth(desiredMonth);
		var strMonth = desiredMonth[0] + desiredMonth[1];
		var i = input.length - 1;
		var strYear = '';
		while (i > 1){
			strYear =  desiredMonth[i] + strYear;
			i = i - 1;
		}
		if ((currentMonth == strMonth) && (currentYear == strYear)){
			var i = 0;
			while (i < 38){
				if (dd == $('td').eq(i).text()){
					var todaysDate = i;
					i = 44;
				}
				i = i + 1;
			}
			$('td').eq(todaysDate).addClass('today')
		}
		else{
			$('td').removeClass('today');
		}
		if (pop == 27){
			$("#lastRow").css("display", "none");
			$("#secondLastRow").css("display", "none");
		}
		else if (pop < 35){
			$("#secondLastRow").fadeIn(1);
			$("#lastRow").css("display", "none");
		}
		else{
			$("#lastRow").fadeIn(1);
			$("#secondLastRow").fadeIn(1);
		}
	});
	
	if (pop == 27){
		$("#lastRow").css("display", "none");
		$("#secondLastRow").css("display", "none");
	}
	else if (pop < 35){
		$("#secondLastRow").fadeIn(1);
		$("#lastRow").css("display", "none");
	}
	else{
		$("#lastRow").fadeIn(1);
		$("#secondLastRow").fadeIn(1);
	}
	
	$("#submit").click (function () {
		var x = document.getElementById("mySearch");//to get the inputs from the search just use x.value
		desiredMonth = x.value;
		pop = calendarMonth(desiredMonth);
		var strMonth = desiredMonth[0] + desiredMonth[1];
		var i = input.length - 1;
		var strYear = '';
		while (i > 1){
			strYear =  desiredMonth[i] + strYear;
			i = i - 1;
		}
		
		if ((currentMonth == strMonth) && (currentYear == strYear)){
			var i = 0;
			while (i < 38){
				if (dd == $('td').eq(i).text()){
					var todaysDate = i;
					i = 44;
				}
				i = i + 1;
			}
			$('td').eq(todaysDate).addClass('today')
		}
		else{
			$('td').removeClass('today');
		}
		newMonthInput = parseInt(x.value[0] + x.value[1]);
		newYearInput = parseInt(x.value[2] + x.value[3] + x.value[4] + x.value[5]);
		if ((x.value == "011") || (x.value == "0101") || (x.value == "01001") || (x.value == "010001")){
			$("#previous").css("display", "none");
		}
		else{
			$("#previous").fadeIn(1);
		}
		if (x.value == '129999'){
			$("#next").css("display", "none");
		}
		else{
			$("#next").fadeIn(1);
		}
		if (pop == 27){
			$("#lastRow").css("display", "none");
			$("#secondLastRow").css("display", "none");
		}
		else if (pop < 35){
			$("#secondLastRow").fadeIn(1);
			$("#lastRow").css("display", "none");
		}
		else{
			$("#lastRow").fadeIn(1);
			$("#secondLastRow").fadeIn(1);
		}
	});
	
	$("caption").click (function () {// so the link is visible to the user cursor: pointer 
		var ff = $(this).text();
		var i = ff.length-1;
		var jj = true;
		var ml = '';
		while (jj){
			if (ff[i] == ' '){
				jj = false;
				ml = ml + "";
			}
			else{
				ml = ff[i] + ml;
			}
			i = i - 1;
		}
		console.log(ml); // put this input into the year2year js file
		window.location = "index.html?year="+ ml;
	});
	
	$('#caption').mouseover(function(){
		var capt = $('#caption').text();
		i = 0;
		var cv = '';
		var ks = 0;
		while (i < capt.length){
			if (capt[i] == ' '){
				ks = i + 1;
				i = 22;
			}
			i = i + 1;
		}
		while(ks < capt.length){
			cv = cv + capt[ks];
			ks = ks + 1;
		}
		var ek = 'go to year ' + cv;
		$('#caption').attr('title', ek);
	});
	
		
	
	
});

//////////////////

//////////////////

//http://www.timeanddate.com/calendar/?year=1&country=22 THIS IS WHERE YOU SHOULD LOOK

// Greogorian CALENDAR: http://5ko.free.fr/en/year.php?y=1&s=