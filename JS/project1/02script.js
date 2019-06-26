// Score keeper

// default score point required to win the game is 5.
// when player one or two get a point thier score will be incremented by one
// which ever player get to the winninng socre point wins.
// the buttons should not increment score once some wins.
//************************************************************************* */
// winning score required to win the game can be set byb the user.
// the buttons should follow the same rules with user inputed score points to win the game.
//****************************************************************************/
// the Reset button 
// the reset button will reset the score for both  to 0.

//*************************************************************************** */

//thses two selects the player one and playe two buttons
var p1button=document.querySelector("#p1"); //select player one button 
var p2button=document.getElementById("p2"); //select player two button, using diffrent kind of selector for practices
var p1Score=0;
var p2Score=0;
//selecting the score for player 1. we have added a span with id to the numerical parts of the h1 tag so we can select and update score as the user clicks the buttons. 
//<h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
var p1Display=document.querySelector("#p1Display");
//selecting the score for player 2
var p2Display=document.querySelector("#p2Display")
//we will set this boolean to true when one of the player reaches the winning score.
var gameOver=false;
//default winning score
var winningScore=5;

//we are adding event lister for both player one and player two button.
//the buttons should increment by one when clicked as long as winning score is not reached by either of the player.
//the buttons should not increment when one of the player reaches the winning score.
//when one of the player reaches winning score, the color of the number that shows current score should chnage to green for the winner player only.
p1button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner")
            gameOver=true;
        }
        //using the textContent we update the score in the html to the new score.
        p1Display.textContent=p1Score;
    }
   
});
p2button.addEventListener("click",function(){
    if(!gameOver){
    p2Score++;
    if(p2Score ===winningScore){
        p2Display.classList.add("winner");
        //we could have used the below line to chnage the color to black but we have to turn the style back to black, whenever there is a winner, other wise the color will keep its green color on the next game. that is why we are remving the winner class list whenever we reset the game so we can keep its originial color
        //p2Display.style.color="green";
        gameOver=true;
    }
    p2Display.textContent=p2Score;

    }
});
//when the reset button is clickecd, we want to rest the p1Score and p2Score vraible to 0.
// and we want to rest the score board on the html to 0 as well
// and we want to remove the green class that could be added to one of the two players score counter in the html,  in case it was clicked after a winning score
//lastly we want to make sure that the boolen gameOver is set to false so the code can run again
var resetButton=document.getElementById("reset");

resetButton.addEventListener("click",function(){
    // console.log("reset clicked");
    reset();
});

//********************input field ****************************
 //now when the input field is set to the number entered we want the "playing to field to change to that number" 
 // so we jsut have to adjust the winning score to the user inputed number.

 //here we are selecting the input field
 var numInput=document.querySelector("input");
//here we are selectingthe span inside of the p tag
 var winnningScoreDisplay=document.querySelector("p span");
 // we are using the change since the input box can be changed by not only a click but also, a user can input the games round through keyboard and we want to detect that too. so we are using change event listener to detect chnages in the input and respond
 numInput.addEventListener("change", function(){
    //  var input =document.querySelector("input");
    // console.log(input);
    // p.textContent="value chnaged"
    // winnningScoreDisplay.textContent=numInput.value;
    //** here this keyword refers to the numInput element, so below we are getting the value inputed in the input box, using this.value and updating the round displayer to that value */
    winnningScoreDisplay.textContent=this.value;

    // winningScore=Number(numInput.value);
    // since  this.value returns string representation of the numebr, we need to cast it to a number so, later when we compare its value, it wont cause a bug.
    // if(p1Score === winningScore){ // this is come from the above codes where we are using winningScore to com to p1Score, if we hadnt changed here to a number we would have been comparing a string and an int
    winningScore=Number(this.value);

    reset();

 });
 //********************reset button  ****************************

//when the reset button is clickecd, we want to rest the p1Score and p2Score vraible to 0.
// and we want to rest the score board on the html to 0 as well
// and we want to remove the green class that could be added to one of the two players score counter in the html,  in case it was clicked after a winning score
//lastly we want to make sure that the boolen gameOver is set to false so the code can run again
 function reset(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent="0";
    p2Display.textContent="0";
    //we are not gonna check which span is has the green clas turned on, we will just remove it from both
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
 }