var desiredYear = '';
$(document).ready( function() {

	
	var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	//var start = 1; // change back to 1900
	//var startDay = 1; // change back to 1
	var stringMonth = "";
	var stringYear = "";
	//var input = prompt("Do you want to see a month or a year?");
	var input = "072016"//prompt("Enter month and year: \n\n\nmmyyyy"); // How do you use the search box to 
	
	
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
	
	var stringMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	

	
	function January(bb){
		var month = stringMonths[0];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
					if ((start === year) && (monthLimit === monthCounter)){ //have reached current year and month
						lastMonth.push(currentWeekday);//holds all the weekdays of the month
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#january td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#january td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#1').text(months[(month-1)]);
		return ll; //ll returns the position number in the month, example March, 2017 has 34 position length
	}
	
		function February(bb){
		var month = stringMonths[1];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#february td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#february td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#2').text(months[(month-1)]);
		return ll;
	}
	
		function March(bb){
		var month = stringMonths[2];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#march td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#march td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#3').text(months[(month-1)]);
		return ll;
	}
	
		function April(bb){
		var month = stringMonths[3];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#april td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#april td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#4').text(months[(month-1)]);
		return ll;
	}
	
		function May(bb){
		var month = stringMonths[4];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#may td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#may td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#5').text(months[(month-1)]);
		return ll;
	}
	
	
		function June(bb){
		var month = stringMonths[5];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#june td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#june td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#6').text(months[(month-1)]);
		return ll;
	}
	
		function July(bb){
		var month = stringMonths[6];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#july td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#july td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#7').text(months[(month-1)]);
		return ll;
	}
	
		function August(bb){
		var month = stringMonths[7];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#august td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#august td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#8').text(months[(month-1)]);
		return ll;
	}
	
		function September(bb){
		var month = stringMonths[8];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#september td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#september td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#9').text(months[(month-1)]);
		return ll;
	}
	
		function October(bb){
		var month = stringMonths[9];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#october td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#october td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#10').text(months[(month-1)]);
		return ll;
	}
	
		function November(bb){
		var month = stringMonths[10];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#november td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#november td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#11').text(months[(month-1)]);
		return ll;
	}
	
		function December(bb){
		var month = stringMonths[11];
		var year = bb[0] + bb[1] + bb[2] + bb[3];
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
					if ((start === year) && (monthLimit === monthCounter)){ //have reached current year and month
						lastMonth.push(currentWeekday); //holds all the weekdays of the month
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
		var ll = 0; // why is the function always returning 1???
		while (o < 42){ // unable to fill the calendar days
			if ((yy <= o) && (vv <= lastMonth.length)){
				$("#december td").eq(o).text(vv);
				vv = vv + 1;
			}
			else{
				$("#december td").eq(o).text("");
			}
			if (vv == lastMonth.length){
				ll = o + 1;
			}
			o = o + 1;
		}
		$('#12').text(months[(month-1)]);
		return ll; //ll returns the position number in the month, example March, 2017 has 34 position length
	}
	
	function year(ss){
		$('#yearTitle').text(ss);
		January(ss);
		February(ss);
		March(ss);
		April(ss);
		May(ss);
		June(ss);
		July(ss);
		August(ss);
		September(ss);
		October(ss);
		November(ss);
		December(ss);
		var lll = parseInt(ss);
		return lll;
	}
	
	var today = document.getElementsByTagName("td");
	
	
	// so the link is visible to the user cursor: pointer 
	//MAIN METHOD
	
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear() + '';
	desiredYear = currentYear;
	pop = year(desiredYear);
	var yearInput = parseInt(currentYear);
	
	var url = window.location.href;
	var i = url.length-1;
	var cc = '';
	while (i >= 0){
		if (url[i] == '='){
			i = -1;
		}
		else{
			cc = url[i] + cc; //builds the year, from URL
		}
		i = i - 1;
	}
	if (cc != url){ //checking to see if the selected year has been changed from the previous URL
		console.log(cc);
		desiredYear = cc;
		pop = year(desiredYear);
		var yearInput = pop;
	}
	
	
	
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	
	if ($('#yearTitle').text() == currentYear){ //setting the current date
		i = 0;
		while (i < months.length){
			if (currentDate.getMonth() == i){
				var currentMonth = i;
				i = 22;
			}
			i = i + 1;
		}
		i = 0;
		var tables = document.getElementsByTagName("table");
		var days = document.getElementsByTagName("td");
		while (i < 38){
			if (currentDate.getDate() == $(tables[currentMonth]).find('td').eq(i).text()){
				var currentDay = i;
				i = 44;
			}
			i = i + 1;
		}
		$(tables[currentMonth]).find('td').eq(currentDay).addClass('today'); //blue circle
		//console.log($('#january').find('td').eq(22).text());
	}
	else{
		$('td').removeClass('today');
	}
	
	console.log(currentYear);
	
	$('#mySearch').keypress( function() { //method only allows user to type numbers
		i = 0;
		var nums = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
		var key = event.keyCode;
		if (key == 13){
			desiredYear = $(this).val();
			pop = year(desiredYear);
			if (pop == 9999){
				$("#next").css("display", "none");
			}
			else{
				$("#next").fadeIn(1);
			}
			if (pop == 1){
				$("#previous").css("display", "none");
			}
			else{
				$("#previous").fadeIn(1);
			}
			if ($('#yearTitle').text() == currentYear){
				i = 0;
				while (i < months.length){
					if (currentDate.getMonth() == i){
						var currentMonth = i;
						i = 22;
					}
					i = i + 1;
				}
				i = 0;
				var tables = document.getElementsByTagName("table");
				var days = document.getElementsByTagName("td");
				while (i < 38){
					if (currentDate.getDate() == $(tables[currentMonth]).find('td').eq(i).text()){
						var currentDay = i;
						i = 44;
					}
					i = i + 1;
				}
				$(tables[currentMonth]).find('td').eq(currentDay).addClass('today'); //blue circle
				//console.log($('#january').find('td').eq(22).text());
			}
			else{
				$('td').removeClass('today');
			}
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
	
	if (yearInput != 1){
		$('#previous').fadeIn(1);
	}
	else{
		$("#previous").css("display", "none");
	}
	if (yearInput != 9999){
		$('#next').fadeIn(1);		
	}
	else{
		$("#next").css("display", "none");
	}
	
	$('#previous').click( function() {
		yearInput = pop;
		yearInput = yearInput - 1;
		stringYear = yearInput + "";
		if (yearInput == 1){
			$(this).css("display", "none");
		}
		else if (yearInput != 9999){
			$('#next').fadeIn(1);
		}
		desiredYear = stringYear;
		pop = year(desiredYear);
		if ($('#yearTitle').text() == currentYear){
			i = 0;
			while (i < months.length){
				if (currentDate.getMonth() == i){
					var currentMonth = i;
					i = 22;
				}
				i = i + 1;
			}
			i = 0;
			var tables = document.getElementsByTagName("table");
			var days = document.getElementsByTagName("td");
			while (i < 38){
				if (currentDate.getDate() == $(tables[currentMonth]).find('td').eq(i).text()){
					var currentDay = i;
					i = 44;
				}
				i = i + 1;
			}
			$(tables[currentMonth]).find('td').eq(currentDay).addClass('today'); //blue circle
			//console.log($('#january').find('td').eq(22).text());
		}
		else{
			$('td').removeClass('today');
		}
	});
	
	$('#next').click( function() {
		yearInput = pop;
		yearInput = yearInput + 1;
		stringYear = yearInput + "";
		if (yearInput == 9999){
			$(this).css("display", "none");
		}
		else if (yearInput != 1){
			$('#next').fadeIn(1);
			$('#previous').fadeIn(1);
		}
		desiredYear = stringYear;
		pop = year(desiredYear);
		if ($('#yearTitle').text() == currentYear){
			i = 0;
			while (i < months.length){
				if (currentDate.getMonth() == i){
					var currentMonth = i;
					i = 22;
				}
				i = i + 1;
			}
			i = 0;
			var tables = document.getElementsByTagName("table");
			var days = document.getElementsByTagName("td");
			while (i < 38){
				if (currentDate.getDate() == $(tables[currentMonth]).find('td').eq(i).text()){
					var currentDay = i;
					i = 44;
				}
				i = i + 1;
			}
			$(tables[currentMonth]).find('td').eq(currentDay).addClass('today'); //blue circle
			//console.log($('#january').find('td').eq(22).text());
		}
		else{
			$('td').removeClass('today');
		}
	});
	
	
	$("#submit").click (function () {
		var x = document.getElementById("mySearch");//to get the inputs from the search just use x.value
		desiredYear = x.value;
		pop = year(desiredYear);
		if (pop == 9999){
			$("#next").css("display", "none");
		}
		else{
			$("#next").fadeIn(1);
		}
		if (pop == 1){
			$("#previous").css("display", "none");
		}
		else{
			$("#previous").fadeIn(1);
		}
		if ($('#yearTitle').text() == currentYear){
			i = 0;
			while (i < months.length){
				if (currentDate.getMonth() == i){
					var currentMonth = i;
					i = 22;
				}
				i = i + 1;
			}
			i = 0;
			var tables = document.getElementsByTagName("table");
			var days = document.getElementsByTagName("td");
			while (i < 38){
				if (currentDate.getDate() == $(tables[currentMonth]).find('td').eq(i).text()){
					var currentDay = i;
					i = 44;
				}
				i = i + 1;
			}
			$(tables[currentMonth]).find('td').eq(currentDay).addClass('today'); //blue circle
			//console.log($('#january').find('td').eq(22).text());
		}
		else{
			$('td').removeClass('today');
		}
	});
	
	
	//allows user to go to a month
	$("table").click (function () {// so the link is visible to the user cursor: pointer 
		var captions = document.getElementsByTagName("caption");
		console.log($(this).children("caption").text() + ', ' + $('#yearTitle').text());
		var i = 0;
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var ss = true;
		while (ss){
			if ($(this).children("caption").text() == months[i]){
				i = i + 1;
				ss = false;
			}
			else{
				i = i + 1;
			}				
		}
		var str = i + '';
		if (str.length == 1){
			str = '0' + str;
		}
		str = str + $('#yearTitle').text();
		console.log(str); // put this input into the month2month js file
		window.location = "month2month.html?month="+ str; 
		
	});
	
	$('table').mouseover(function(){
		var capt = $(this).children("caption").text();
		var sl = 'go to ' + capt + ', ' + $('#yearTitle').text();
		$('table').attr('title', sl);
	});
	
	
	
	
	



});