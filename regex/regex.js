"use strict";
var $ = function(id) { return document.getElementById(id); };

var validatePhone = function() {
    var phone = $("phone").value;
    
    var pattern = /^\d?(\+)?(\d{0,3})([\s\.\-\(]){0,2}(\d{3}[\s\.\-\)]{0,2})(\d{3}[\s\.\-])?(\d{4})$/mg;
    
    var isValid = pattern.test(phone);
    
    $("message").firstChild.nodeValue = (isValid) ? "Valid phone number" : "Invalid phone number";
};

window.onload = function() {
    $("validate").onclick = validatePhone;
    $("phone").value = "1 (123) 456-7890";  // set default phone number
};






/* Match these patterns:

The regex isn't perfect and can have some issues like if you group the country code and area codes.. Or if
the country is a short code like +1 instead of 01, etc. Regex used here only for educational purpose & for the assignment's requirements.

I used regex101.com to help me visualize the process of regex groupings.

-- Lesson Notes --
abc…	Letters
123…	Digits
\d	Any Digit
\D	Any Non-digit character
.	Any Character
\.	Period
[abc]	Only a, b, or c
[^abc]	Not a, b, nor c
[a-z]	Characters a to z
[0-9]	Numbers 0 to 9
\w	Any Alphanumeric character
\W	Any Non-alphanumeric character
{m}	m Repetitions
{m,n}	m to n Repetitions
*	Zero or more repetitions
+	One or more repetitions
?	Optional character (like {0,1})
\s	Any Whitespace
\S	Any Non-whitespace character
^…$	Starts and ends
(…)	Capture Group
(a(bc))	Capture Sub-group
(.*)	Capture all
(abc|def)	Matches abc or def

*/