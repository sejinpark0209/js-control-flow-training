console.log("security_questions.js is loaded");

var securityQuestions = [{ question: "Where did you born?",
						   expectedAnswer: "Korea"},
						 { question: "Which is your favorite city?",
						   expectedAnswer: "Chicago"},
						 { question: "What is your favorite color?",
						   expectedAnswer: "Blue"}];



for(var i = 0; i < securityQuestions.length; i++) {
	var userInput = prompt(securityQuestions[i].question);
	if(userInput !== securityQuestions[i].expectedAnswer) {
		alert("it doesn't match!")
	} else {
		break;
	}
}