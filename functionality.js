var start = new Date().getTime(); // Initials timer
var highestScore; 

function displayShape(){
				
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var sideLength = (Math.random() * 230) + 20;

	// Sets random style of shapes
	document.getElementById("shape").style.backgroundColor = "#" + randomColor;
	document.getElementById("shape").style.width = sideLength + "px";
	document.getElementById("shape").style.height = sideLength + "px";
	document.getElementById("shape").style.top = (Math.random() * 500) + "px";
	document.getElementById("shape").style.left = (Math.random() * 500) + "px";

	// Randomise whether shape is circle or square
	if(Math.floor(Math.random()*2) == 0){
		document.getElementById("shape").style.borderRadius = "50%";
	}else{
		document.getElementById("shape").style.borderRadius = "0";
	}

	// Shape made visable
	document.getElementById("shape").style.display = "block";

	// Start timer again
	start = new Date().getTime();
}

function shapeReappear(){
	setTimeout(displayShape, (Math.random() * 3000) + 1000);
}

shapeReappear();

// When the shape is clicked on return reaction results
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();
	var timeTaken = (end - start)/1000; // Find time taken

	document.getElementById("timeTaken").innerHTML = timeTaken + "s"; // Return reaction speed to user interface

	// Highest score set to a very high number for initial high score comparison
	if (typeof(highestScore) == 'undefined'){
		highestScore = timeTaken;
		document.getElementById("bestScore").innerHTML = "Your quickest time: " + highestScore + "s"; 
	}
	else if(highestScore > timeTaken){
		highestScore = timeTaken;
		document.getElementById("bestScore").innerHTML = "Your quickest time: " + highestScore + "s"; 
	}
	shapeReappear();
}