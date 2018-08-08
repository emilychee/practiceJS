var today = new Date();
var currentMonth = today.getMonth();
var dayOfMonth = today.getDate();
var numDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var aprilDays = 10;
var daysLeft = 0;

if (currentMonth == 3) {
	if (dayOfMonth <= 10) {
		daysLeft = 10 - dayOfMonth;
	}
	else {
		daysLeft = (30 - dayOfMonth) + 31 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 31 + 28 + aprilDays;
	}
}
else {
	for (var i = currentMonth + 1; i != 3; i++) {
		if (i == 12) {
			i = 0;
		}
		daysLeft += numDaysMonth[i];
	}

	daysLeft += aprilDays + (numDaysMonth[currentMonth] - dayOfMonth);
}

var el = document.getElementById('numDays');
el.textContent = daysLeft;