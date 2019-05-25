// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
//we can use ".highlight" instead of "div.highlight" but that would select all elements with class highlight, which we might not want to do. Instead we will make our selection more specific by selecting all div with hightlight class.
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pin
$("div:first-of-type").css("color", "pink");