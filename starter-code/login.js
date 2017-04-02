console.log("login.js is loaded");

var userLogin = {
	userName: "sejin",
	password: "qwerty"
}

var inputPass = prompt("Enter password for user " + userLogin.userName);

while(inputPass !== userLogin.password) {
	console.log("Password not matched")
	var inputPass = prompt("Enter password for user " + userLogin.userName);
}
