var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var res=document.querySelector("#reset");
var score1=document.querySelector("#pl1");
var score2=document.querySelector("#pl2");
var inp=document.querySelector("input");
var winscore=document.querySelector("p span");
var s1=0;
var s2=0;
gameOver=false;
//winningScore=5;
//Update Score for player 1
p1.addEventListener("click",function (){
	if(!gameOver){
		s1++;
	
	if (s1==inp.value){
		score1.classList.add("winner");
		score2.classList.add("looser");
		gameOver=true;
	}
score1.textContent=s1;
}});
//Update Score for player 2
p2.addEventListener("click",function (){
if(!gameOver){
		s2++;
	if (s2==inp.value){
		score2.classList.add("winner");
		score1.classList.add("looser");
		gameOver=true;
	}
	score2.textContent=s2;
}});
//reset scores
res.addEventListener("click",function () {
	s1=0;
	s2=0;
	score1.textContent=s1;
	score2.textContent=s2;
	score2.classList.remove("winner");
	score1.classList.remove("looser");
	score2.classList.remove("looser");
	score1.classList.remove("winner");
	gameOver=false;
	inp.value=0;
	winscore.textContent=inp.value;
})
//accept winning score
inp.addEventListener("change",function(){
	winscore.textContent=inp.value;

})