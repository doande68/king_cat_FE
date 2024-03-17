function signIn() {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	console.log(name)
	console.log(email)
	console.log(password)
	let newUser = {
		name: name,
		email: email,
		role: 2,
		password: password,
	}

	axios.post('http://localhost:8080/user/add', newUser).then(function (response) {
		window.location.href = "../home/home.html";
	}).catch(function (error) {
		console.error(error);

	});
}