// JavaScript Document

var score = 0;

window.onload = function() {
	
//LOAD COOKIES HERE
	
	randomQ();
};

function myFunction( ) {
	var txt;
	if (confirm("Is california a state? ok for yes cancel for no")) {
	 txt= "you are correct!";
	} else {
		txt= "you are incorrect:(";
	}
	document.getElementById("demo").innerHTML = txt;
}


function randomQ() {
	document.getElementById("a1").removeEventListener("click", wrongAnswer);
	document.getElementById("a2").removeEventListener("click", wrongAnswer);
	document.getElementById("a3").removeEventListener("click", wrongAnswer);
	document.getElementById("a4").removeEventListener("click", wrongAnswer);
	document.getElementById("a1").removeEventListener("click", rightAnswer);
	document.getElementById("a2").removeEventListener("click", rightAnswer);
	document.getElementById("a3").removeEventListener("click", rightAnswer);
	document.getElementById("a4").removeEventListener("click", rightAnswer);
	
	var n = Math.floor(Math.random() * 8);
	switch(n) {
		case 0:
			// question 1
			document.getElementById("demo").innerHTML = "4+(5+3)/8";
			// answers
			document.getElementById("a1").innerHTML = "5";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "4";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "10";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "2";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 1:
			// question 2	
			document.getElementById("demo").innerHTML = "Who was the First President of the United States?";
			// answers
			document.getElementById("a1").innerHTML = "George Washington";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "Donald Trump";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Tom Brady";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "John Adams";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 2:
			// question 3
			document.getElementById("demo").innerHTML = "Who was the first U.S. volleyball player to win three Olympic medals? ";
			// answers
			document.getElementById("a1").innerHTML = "Matt Anderson";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Logan Tom";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Karch Kirally";
			document.getElementById("a3").addEventListener("click", rightAnswer);
			document.getElementById("a4").innerHTML = "Gabrielle Reece";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;

		case 3:
			// question 4
			document.getElementById("demo").innerHTML = "What is the largest three integer prime number?";
			// answers
			document.getElementById("a1").innerHTML = "882";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "997";
			document.getElementById("a2").addEventListener("click", rightAnswer);
			document.getElementById("a3").innerHTML = "743";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "721";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
		case 4:
			// question 5
			document.getElementById("demo").innerHTML = "If you flip a coin three times, what is the probability of getting at least one tail?";
			// answers
			document.getElementById("a1").innerHTML = "7/8";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "4/5";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "3/2";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "1/2";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
		
		case 5:
			// question 6
			document.getElementById("demo").innerHTML = "What is the term for a solid figure with flat faces that are polygons?";
			// answers
			document.getElementById("a1").innerHTML = "Paragons";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Aragon";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Polyhedron";
			document.getElementById("a3").addEventListener("click", rightAnswer);
			document.getElementById("a4").innerHTML = "Ugh-hedron";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
	}
}

function rightAnswer() {
	randomQ();
	
//PROGRESS BAR GOES UP

//SCORE GOES UP
	alert("Right answer!");
	score += 50;
	document.getElementById("score").value = score;
}

function wrongAnswer() {
	randomQ();
	
//PROGRESS BAR GOES UP

//SCORE GOES DOWN
	alert("Wrong answer!");
	score -= 25;
	document.getElementById("score").value = score;
}