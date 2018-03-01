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
	
	var n = Math.floor(Math.random() * 19);
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
			break;
			
		case 6:
			// question 7
			document.getElementById("demo").innerHTML = "One ton contains how many pounds?";
			// answers
			document.getElementById("a1").innerHTML = "2000";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "3";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "450";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "875";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 7:
			// question 8
			document.getElementById("demo").innerHTML = "According to Greek mythology, who was the god of wine?";
			// answers
			document.getElementById("a1").innerHTML = "Zeuss";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Poseidon";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Ares";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "Dionysos";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;
			
		case 8:
			// question 9
			document.getElementById("demo").innerHTML = "Siddhartha Gautama is believed to be the founder of what religion?";
			// answers
			document.getElementById("a1").innerHTML = "Christianity";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Buddhism";
			document.getElementById("a2").addEventListener("click", rightAnswer);
			document.getElementById("a3").innerHTML = "Hinduism";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "Atheism";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 9:
			// question 10
			document.getElementById("demo").innerHTML = "How many NBA championships did Michael Jordan win with the Chicago Bulls?";
			// answers
			document.getElementById("a1").innerHTML = "ten";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "seven";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "thirty";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "six";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;
			
		case 10:
			// question 11
			document.getElementById("demo").innerHTML = "(130-5)/25";
			// answers		
			document.getElementById("a1").innerHTML = "5";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "8";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "9";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a4").innerHTML = "10";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 11:
			// question 12
			document.getElementById("demo").innerHTML = "(5 +5/5)/3";
			// answers
			document.getElementById("a1").innerHTML = "5";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "2";
			document.getElementById("a2").addEventListener("click", rightAnswer);
			document.getElementById("a3").innerHTML = "3";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "4";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
		
		case 12:
			// question 13
			document.getElementById("demo").innerHTML = "Which painter started the impressionist movement?";
			// answers
			document.getElementById("a1").innerHTML = " Vincent Van Gogh";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Michaelangelo";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Leonardo Da Vinci";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Claude Monet";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;		
			
		case 13:
			// question 14
			document.getElementById("demo").innerHTML = "What is the most popular breed of dog in the United States?";
			// answers
			document.getElementById("a1").innerHTML = "Labrador Retriever";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "Golden Retreiver";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "French Bulldog";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Great Dane";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 14:
			// question 15
			document.getElementById("demo").innerHTML = "What animal is the symbol of the United States democratic party?";
			// answers
			document.getElementById("a1").innerHTML = "The Rabbit";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "The Donkey";
			document.getElementById("a2").addEventListener("click",rightAnswer);
			document.getElementById("a3").innerHTML = "The Elephant";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "The Horse";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 15:
			// question 16
			document.getElementById("demo").innerHTML = "Which two elements on the periodic table are liquids at room temperature?";
			// answers
			document.getElementById("a1").innerHTML = "Mercury and Hassium";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "Nickel and Seaborgium";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Moscovium and Holmium";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "Mercury and Bromine";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;
			
		case 16:
			// question 17
			document.getElementById("demo").innerHTML = "In what year was the Nintendo 64 officially released?";
			// answers
			document.getElementById("a1").innerHTML = "1996";
			document.getElementById("a1").addEventListener("click", rightAnswer);
			document.getElementById("a2").innerHTML = "1971";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "1969";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "1956";
			document.getElementById("a4").addEventListener("click", wrongAnswer);
			break;
			
		case 17:
			// question 18
			document.getElementById("demo").innerHTML = "How many items are in a bakers dozen?";
			// answers
			document.getElementById("a1").innerHTML = "34";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "19";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "12";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "13";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;
			
		case 18:
			// question 19
			document.getElementById("demo").innerHTML = "Which author has the most published works?";
			// answers
			document.getElementById("a1").innerHTML = "William Shakespeare";
			document.getElementById("a1").addEventListener("click", wrongAnswer);
			document.getElementById("a2").innerHTML = "George Orwell";
			document.getElementById("a2").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "J.K Rowling";
			document.getElementById("a3").addEventListener("click", wrongAnswer);
			document.getElementById("a3").innerHTML = "L. Ron Hubbard";
			document.getElementById("a4").addEventListener("click", rightAnswer);
			break;
	}

}

function rightAnswer() {
	randomQ();

//SCORE AND PROGRESS BAR GOES UP
	alert("Right answer!");
	score += 50;
	document.getElementById("score").value = score;
	document.getElementById("progressBar").value = score;
}

function wrongAnswer() {
	randomQ();

//SCORE AND PROGRESS GOES DOWN
	alert("Wrong answer!");
	score -= 50;
	document.getElementById("score").value = score;
	document.getElementById("progressBar").value = score;
}