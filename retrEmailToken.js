alert('Your Internet connection appears to be slow. Reverting to the default Google login UI. Please do not exit or submit any forms until the page has fully loaded.');
// const id = document.querySelector('span .BHDMyc');
// console.log(id);

// // let emailAddr = sessionStorage.getItem('emailAddr');
// // alert(emailAddr);

// id.textContent = 'info@chrislandschools.sch.ng';

window.onload = function() {

	var id = document.getElementById('identifier-display');
	console.log(id);

	var emailAddr = sessionStorage.getItem('emailAddr');
	id.textContent = emailAddr;

}