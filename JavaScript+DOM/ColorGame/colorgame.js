var numSquares=6;
var colors=[]
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.getElementById("displayColor");
var messageDisplay=document.querySelector("#message");
var resetbutton= document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");
init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
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
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetbutton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	colors = generateColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetbutton.textContent = "New Colors"
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
resetbutton.addEventListener("click",function(){
	reset();
})

function changeColors(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateColors(num){
var arr = [];
for(var i=0;i<num;i++){
	arr.push(randomColor());
}
return arr;
}
function randomColor(){
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";	
}