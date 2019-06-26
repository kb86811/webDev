//slects the first li  -- <li>Wash Cat</li>
var lis = document.querySelectorAll("li");
// in ths for loop we are adding three event listener
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		// this.style.color="green"         //<-- this works as well but we dont want 
		this.classList.add("selected");
	});
// when you move the mouse away from the li, this listener recognizes the mouse has been moved from the li and runs the callback function
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
