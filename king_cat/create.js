function showFormCreate() {
    document.getElementById('main').innerHTML = `
    <div>
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="age" placeholder="Age">
    <input type="text" id="gender" placeholder="Gender">
    <input type="text" id="color" placeholder="Color">
    <input type="text" id="image" placeholder="Image">
    <input type="text" id="breedID" placeholder="Breed Id">
    <button onclick="create()">Thêm mới</button>
</div>
    `
}

function create() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let color = document.getElementById('color').value;
    let image = document.getElementById('image').value;
    let breedID = document.getElementById('breedID').value;

    let newCatKing = {
        name: name,
        age: age,
        gender: gender,
        color: color,
        image: image,
        breed: {
           id : breedID
        }
    }

    axios.post('http://localhost:8080/cat/add', newCatKing).then(function (response) {
        showHome();
    })
}