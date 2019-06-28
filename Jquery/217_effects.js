$("button").on("click", function(){
 $('div').slideToggle(1000, function(){
 	$(this).remove();  // removes each of the div elements from the DOM
 });
});
