// scripts.js

// Function to create a new user
function createUser() {
  let name = document.getElementById('createName').value;
  let email = document.getElementById('createEmail').value;
  let password = document.getElementById('createPassword').value;

  let newUser = {
    name: name,
    email: email,
    password: password,
  }

  axios.post('http://localhost:8080/user/add', newUser)
  .then(function (response) {
    alert("User created successfully");
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Function to show the form for creating a new cat
function showFormCreate() {
  document.getElementById('catForm').style.display = 'block';
}

// Function to save the changes to a cat
function saveCat() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let gender = document.getElementById('gender').value;
  let color = document.getElementById('color').value;
  let image = document.getElementById('image').value;
  let breedID = document.getElementById('breedID').value;

  let newCat = {
    name: name,
    age: age,
    gender: gender,
    color: color,
    image: image,
    breed: {
      id: breedID
    }
  }

  axios.post('http://localhost:8080/cat/add', newCat)
  .then(function (response) {
    alert("Cat created successfully");
    closeForm();
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Function to close the cat form popup
function closeForm() {
  document.getElementById('catForm').style.display = 'none';
}
