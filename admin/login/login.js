document.getElementById('loginForm2').addEventListener('click', function(event) {
		event.preventDefault();

		let email = document.getElementById('emailLogin').value;
		let password = document.getElementById('pswdLogin').value;

		axios.get('http://localhost:8080/user').then(function(response) {
			response.data.forEach(function(user) {
				if (user.email === email && user.password === password && user.role === 2) {
					window.location.href = "../../home/home.html";
				}
			});

		}).catch(function(error) {
			console.error(error);
		});
	});
