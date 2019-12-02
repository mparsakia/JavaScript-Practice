var $ = function (id) { return document.getElementById(id); };



var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};



var getLastDayofMonth = function(currentMonth, currentYear) { 
    var lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    return lastDay;
};
// Need to check year for Feb. (leap years), so I added a year param.
// @ funct above: Create Date obj (year, month +1, day 0);
// This basically goes to "next month" and then "rolls back" becaue of "0" as the day previous.

window.onload = function () {

var todayDate = new Date();
var thisMonth = todayDate.getMonth();
var thisYear = todayDate.getFullYear();
var firstDayMonth = (new Date(thisYear, thisMonth)).getDay();
var lastDayMonth = (new Date(thisYear, thisMonth + 1, 0)).getDate(); // Returns int of last day 
    
// Write the Month and Year to HTML file
$("month_year").innerHTML = getMonthText(thisMonth) + "&nbsp;" + thisYear;
    

var calTable = $("calendar");    
var tbodyCal = calTable.tBodies[0];

// Use nested for loops to create the calendar table outline (no dates yet)
// Insert 5 rows to the calendar
for (var i = 0; i < 5; i++) {
    var theRow = tbodyCal.insertRow(-1);
    
    // Insert 7 empty cells for each row
    for (var j = 0; j < 7; j++) {
        theRow.insertCell(-1);
    }            
}
    


// Get array of td elements within Calendar ID div...
var tdArray = document.getElementById("calendar").getElementsByTagName('td');
    
var firstDayOffset = -(firstDayMonth);  // Negate number, as to offset the "start point" for the loop that will write to innerHTML
    
for (var k = firstDayOffset; k <= lastDayMonth; k++) { 
    // 0 = sun, 1 = mon ... 6 = sat (start writing innerHTML here...)
    if (k >= 0) {           // Check to see that we are starting on the first day. (if k is negative, we dont start; or 0 if month starts on Sunday)
        if (k < lastDayMonth ) {        // Don't write more than the number of days in the month. Not <= because we will write starting from loop counter "0"
            tdArray[k+firstDayMonth].innerHTML = k + 1;     //offset start point of tdArray && k+1 because we don't have days that start at "0" (dont write 0 as the first day)
        }
    }
}    
};