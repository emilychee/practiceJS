var date = new Date();
var dayOfWeek = date.getDay();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.getElementById('dayOfWeek').innerHTML = days[dayOfWeek];
document.getElementById('date').innerHTML = months[month] + " " + day + ", " + year;
//var p2 = document.getElementById('time').textContent;
