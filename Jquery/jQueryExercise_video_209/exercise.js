// 2 Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
//we can use ".highlight" instead of "div.highlight" but that would select all elements with class highlight, which we might not want to do. Instead we will make our selection more specific by selecting all div with hightlight class.
$("div.highlight").css("width", "200px");

//4  Select the div with id "third" and give it a orange border
// $("div#third").css("border", "4px solid orange");  // this works too but we know there can be only one div with id third. so we can instead select using the id
$("#third").css("border", "4px solid orange");


// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
// we can also do  first instead of first-of-type as shown below , but it is not native to CSS its defined in the JQuery so it will be slightly slower.
// $("div:firs").css("color", "pink");

