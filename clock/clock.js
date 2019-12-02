"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var timeNow = new Date();
    var varHours = timeNow.getHours();
    
    // Check if greater than 12 then we need to subtract 12 to get from Miltary Time
    if (varHours > 12) {
        $("hours").firstChild.nodeValue = timeNow.getHours() - 12;
        $("ampm").firstChild.nodeValue = "PM"; // PM if 1300-2359
    } else {
        $("hours").firstChild.nodeValue = timeNow.getHours();
        $("ampm").firstChild.nodeValue = "AM"; // AM if before 1200
    }
    
    // Minutes & Seconds just pad digits for 01-09
    $("minutes").firstChild.nodeValue = padSingleDigit(timeNow.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(timeNow.getSeconds());

};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

window.onload = function() {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);    
};