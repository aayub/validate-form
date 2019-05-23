
var errObj = {};

window.onload = function () {

	errObj = { // An Object that keeps track of valid/invalid flags for the input data
		firsterr : false, 
		lerror : false, 
		uniterror : false, 
		passerror : false, 
		rePassErr : false,
		usererr : false, 
		streeterror : false, 
		stNameErr : false, 
		telErr : false, 
		zipErr : false, 
		cityErr : false
	};
}

// form validation function
function formValidation() {

	var errBox = document.getElementById("reg-body");
	errBox.innerHTML = "";

	var count = 0;
	//counting the number of errors
	for (var i = 0; i < errObj.length; i++) {
		if (errObj[i] == true)
			count++;
	}
	if (count > 0)
		return false;
	else
		return false;
}

// reset button clears errors and flags
function reseterr() {
	var errBox = document.getElementById("reg-body");
	errBox.innerHTML = "";
	for (var i = 0; i < errObj.length; i++) {
		errObj[i] = false;
	}
}

// puts errors into the error box
function puterrors(error) {
	var errBox = document.getElementById("reg-body");
	// set the error box border to solid (from unset/hidden)
	errBox.style.borderStyle = "solid";
	// create a br (line break) element
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	//check if there have been any previous errors. If not, create a "Errors:" headlines
	var check = document.getElementById("errHead");
	if (!check) {
		var h4 = document.createElement("h4");
		h4.id = "errHead";
		var errText = document.createTextNode("Errors:");
		h4.appendChild(errText);
		errBox.appendChild(h4);
		//add a line break after the headline
		errBox.appendChild(br);
	}
	//create a text node for the error message
	var textNode = document.createTextNode(error);
	//add the error message to the error box
	errBox.appendChild(textNode);
	//add a line break after each error
	errBox.appendChild(br2);
}

//checks if there are only numbers in a string
function onlyNumbers(input) {
	input = input.trim();
	for (var i = 0; i < input.length; i++) {
		if (isNaN(input[i]))
			return false
	}
	return true;
}

//checks if there are only letters in a string
function onlyLetters(input) {
	input = input.toUpperCase();
	for (var i = 0; i < input.length; i++) {
		if (input[i] > 'Z' || input[i] < 'A')
			return false
	}
	return true;
}

//checks if there are only caps letters in a string
function allCaps(input) {
	for (var i = 0; i < input.length; i++) {
		if (input[i] > 'Z' || input[i] < 'A')
			return false
	}
	return true;
}

// validates first name
function testfname() {
	var fName = document.signup.fname.value;
	if ((onlyLetters(fName)) == false) {
		errObj.firsterr = true;
		puterrors("Name must be all letters");
	}
}

// validates last name
function testlName() {
	var lName = document.signup.lname.value;
	if ((onlyLetters(lName)) == false) {
		errObj.lerror = true;
		puterrors("Last name must be all letters");
	}
}

// validates unit number
function testunit() {
	var unitNum = document.signup.unitNum.value;
	if (onlyNumbers(unitNum) == false) {
		errObj.uniterror = true;
		puterrors("Unit Number must be a number");
	}
}

// validates street number
function checkStNum() {
	var st = document.signup.stNum.value;
	if (onlyNumbers(st) == false) {
		errObj.streeterror = true;
		puterrors("Street Number must be a number");
	}
}

// validates street name
function checkStName() {
	var stName = document.signup.stName.value;
	if (/[0-9]/.test(stName)) {
		errObj.stNameErr = true;
		puterrors("Street name cannot contain digits");
	}
}

// validates city
function checkCity() {
	var city = document.signup.city.value;
	if (onlyLetters(city) == false) {
		errObj.cityErr = true;
		puterrors("City must contain letters only");
	}
}

// validates zip code
function checkZip() {
	var zip = document.signup.postal.value;
	if (/^[A-Za-z][0-9][A-Za-z][ -]?[0-9][A-Za-z][0-9]$/.test(zip) == false) {
		errObj.cityErr = true;
		puterrors("Only Canadian format Zip Code allowed, for example C1A1A7");
	}
}

//validates phone number
function checkTel() {
	var tel = document.signup.tel.value;
	if (tel.length != 12 || (/^\d{3}[-]\d{3}[-]\d{4}$/.test(tel)) == false) {
		errObj.telErr = true;
		puterrors("Phone# must be 10 digits, hyphen in the 4th and 8th position. Format allowed: xxx-xxx-xxxx for example 111-111-1111");
	}
}

// validates username
function testuser() {
	var user = document.signup.user.value;
	if ((onlyLetters(user[0]) == false) || user.length < 6) {
		errObj.usererr = true;
		puterrors("Username must be at least 6 character and start with letter");
	}
}
//validates password
function checkPass() {
	var pass = document.signup.pass.value;

	var count = 0; //number of errors
	var charAtOne = /[a-zA-Z]/.test(pass[0]);
	var num = /[0-9]/.test(pass);
	var cap = /[A-Z]/.test(pass);

	if (pass.length < 8 || !charAtOne || !num || !cap) {
		errObj.passerror = true;
		puterrors("Password must be 8 characters long, start with a character, have at least 1 digit and 1 uppercase");
	}
}

//validate password match
function checkPassMatch() {
	var pass = document.signup.pass.value;
	var rePass = document.signup.rePass.value;

	if (pass != rePass) {
		errObj.rePassErr = true;
		puterrors("The password strings must match");
	}
}
