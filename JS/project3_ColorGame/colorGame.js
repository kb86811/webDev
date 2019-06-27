var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); 
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

// this is used to set up the game for easy and hard mode, when the user selects the  in the game 
function setupModeButtons(){
	//when you click one the mode buttons, it will basically remove the slected css class from both, and adds selected class to the one selected
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	// var squares = document.querySelectorAll(".square"); copied from the top , so it is easier to see what squares refering to
// when the user clicks the squares the callback function will run. which bascially gets 
// the background color of the clicked squares, compares it with the answer.
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"

				changeColors(clickedColor);  // this function chnages the color of the squares to the answer color, we pass the color of the answer
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares); // colors now contain an array of 6 random rgb color in a string format
	//pick a new random color from array color 
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})
// when the user chooses the right color, we will turn the six squares to the chosen color (correct color)
// note this code also chnages the square with the right color, even though it is already set to the right color. we dont care though, we can add a code to ignore that square but, for know it this works, eventhough its redundant
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		//NOTE WHERE THE STYLING IS BEING APPLIED. squares contain reference to all the six blocks, hence we are manipulating the background color though it.
		squares[i].style.background = color;
	}
}

function pickColor(){
	//math.random() picks a float number between 0 and 0.99. and we multiply that number by the size of the colors array which is 6,we take the floor since when we multiply, it will be a float. 
	//  the number picked is always between 0 and colors.length-1  ( 0 to 5) since the large number is always 6*.99=floor(5.99..)=5  
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	// here we have added the spaceafter the the number, since the DOM autmatically 
	//adds a space right after each of the rgb numbers when we assing them. So we need to add space here as well between the r,g,b numbers so when we compare the clicked color with the right color. 
	//compare color to pickedColor
	// if(clickedColor === pickedColor){   // this would not work if we dont have the space between the rgb numbers
	//see "comparing bug fix" boomark on udemy for more info

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

