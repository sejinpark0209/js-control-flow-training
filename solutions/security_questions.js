console.log("security_questions.js is loaded");

const securityQuestions = [
	{
		question: "What was your first pet's name?",
		expectedAnswer: "FlufferNutter"
	},
	{
		question: "What was the model year of your first car?",
		expectedAnswer: "1985"
	},
	{
		question: "What city were you born in?",
		expectedAnswer: "NYC"
	}
]

let userAnswer = "";
let hacker = false;

for (let securityQuestion of securityQuestions) {
	userAnswer = prompt(securityQuestion.question);
	if (userAnswer !== securityQuestion.expectedAnswer){
		alert("Incorrect security question response!");
    hacker = true;
		break;
	}
}

if (hacker){
  console.log("Stop hacking!");
}



// ES5
// var securityQuestions = [
// 	{
// 		question: "What was your first pet's name?",
// 		expectedAnswer: "FlufferNutter"
// 	},
// 	{
// 		question: "What was the model year of your first car?",
// 		expectedAnswer: "1985"
// 	},
// 	{
// 		question: "What city were you born in?",
// 		expectedAnswer: "NYC"
// 	}
// ]
//
// var userAnswer = "";
// var hacker = false;
//
// for (var i=0; i < securityQuestions.length; i++){
// 	userAnswer = prompt(securityQuestions[i].question);
// 	if (userAnswer !== securityQuestions[i].expectedAnswer){
// 		alert("Incorrect security question response!");
//     hacker = true;
// 		break;
// 	}
// }
//
// if (hacker){
//   console.log("Stop!");
// }
