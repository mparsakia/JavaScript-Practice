"use strict";

(function($){
    $.fn.colorRows = function (){
        var rowArray = document.getElementsByTagName("tr");
        for (var i = 0; i < rowArray.length; i++) {
                if (i % 2 == 0) { rowArray[i].className = "even";}
                else { rowArray[i].className = "odd";}
            } 
        $('tr:has(th)').removeClass().addClass("header"); // cleanup
    }
}(jQuery));
// line 10 comments
// "tr:has(th)" because the table is coded like so in the HTML, else we could have just done "th" or "thead th"
// removeClass because the loop picked it up and replace with header.