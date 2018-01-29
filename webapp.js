// JavaScript Document

var score = 0;

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
	document.getElementById("a1").removeEventListener("click", rightAnswer);
	document.getElementById("a1").removeEventListener("click", wrongAnswer);
	
	var n = Math.floor(Math.random() * 3);
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
			document.getElementById("a4").innerHTML = "2";
			break;
		case 1:
			// question 1
			document.getElementById("demo").innerHTML = "Who was the First President of the United States?";
			// answers
			document.getElementById("a1").innerHTML = "George Washington";
			document.getElementById("a2").innerHTML = "Donald Trump";
			document.getElementById("a3").innerHTML = "Tom Brady";
			document.getElementById("a4").innerHTML = "John Adams";
			break;
		case 2:
			// question 1
			document.getElementById("demo").innerHTML = "Who was the first U.S. volleyball player to win three Olympic medals? ";
			// answers
			document.getElementById("a1").innerHTML = "Matt Anderson";
			document.getElementById("a2").innerHTML = "Logan Tom";
			document.getElementById("a3").innerHTML = "Karch Kirally";
			document.getElementById("a4").innerHTML = "Gabrielle Reece";
			break;
	
	}
}

function rightAnswer() {
	randomQ();
	// progress bar goes up
	// score goes up
	alert("Right answer!");
}

function wrongAnswer() {
	randomQ();
	// progress bar goes down
	// scores goes down
	alert("Wrong answer!");
}