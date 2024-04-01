var squares=document.querySelectorAll(".square");
var dif=6;
var colors=generateRandomColors(dif);
var pickedColor= pickColor();
var rgb=document.getElementById("rgb");
var msg=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBtn=document.getElementById("reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
rgb.textContent=pickedColor;
rgb.style.textTransform="uppercase";
for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor===pickedColor){
			msg.textContent="Correct!!!";
			changeColors(pickedColor);
			h1.style.backgroundColor=pickedColor;
			resetBtn.textContent="Play again?";
		}
		else{ 
			this.style.background="#232323";
			msg.textContent="Try again!!!";
		}
	})
}


resetBtn.addEventListener("click", function(){
	colors=generateRandomColors(dif);
	pickedColor=pickColor();
	rgb.textContent=pickedColor;
	for(i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	this.textContent="New colors";
	msg.textContent="";
	h1.style.backgroundColor= "steelblue";
	 });

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	dif=3;
	colors=generateRandomColors(dif);
	pickedColor=pickColor();
	rgb.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
		if(i<=2){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	msg.textContent="";
	h1.style.backgroundColor= "steelblue";
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	dif=6;
	colors=generateRandomColors(dif);
	pickedColor=pickColor();
	rgb.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		if(i>=3){
			squares[i].style.display="block";
		}
	}
	msg.textContent="";
	h1.style.backgroundColor= "steelblue";
})


function changeColors(color){
	for(i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
 var arr=[];
 for(i=0;i<num;i++){
 	arr[i]=randomColor();
 }
 return arr;
}
 function randomColor(){
 var r=Math.floor(Math.random()*256);
 var g=Math.floor(Math.random()*256);
 var b=Math.floor(Math.random()*256);
 return("rgb(" + r +", "+ g +", "+ b+")");
 }