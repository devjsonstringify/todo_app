//Add time, day and calendar
var date = new Date();

function mygetday() {
  var dateTodayIs = date.getDate();
  //get day
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tueday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Satday";
  var exactDay = weekday[date.getDay()];
  document.getElementById('dis-day').innerHTML = exactDay;
  document.getElementById('dis-year').innerHTML = date.getFullYear();
}

function mygetdate(){
  document.getElementById('dis-date').innerHTML = date.getDate();
}
function mygetMonth() {
  //get month
  var month = new Array(7);
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  var exactMonth = month[date.getMonth()];
  document.getElementById('dis-month').innerHTML = exactMonth;
}

function calendarModule() {
  mygetday();
  mygetdate();
  mygetMonth();
}
setTimeout(calendarModule, 1000);
