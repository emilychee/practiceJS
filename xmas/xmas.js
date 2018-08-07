var decemberDays = 25;
var today = new Date();
var currentMonth = today.getMonth();
var dayOfMonth = today.getDate();
var daysLeft;
var numDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (currentMonth == 11) {
	if (dayOfMonth <= 25) {
		daysLeft = 25 - dayOfMonth;
	}
	else {
		daysLeft = (31 - dayOfMonth) + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + decemberDays;
	}
}
else {
	daysLeft = numDaysMonth[currentMonth] - dayOfMonth + decemberDays;
	for (var i = currentMonth + 1; i < 11; i++) {
		daysLeft += numDaysMonth[i];
	}
}

var el = document.getElementById('numDays');
el.textContent = daysLeft + " days left until Christmas!";