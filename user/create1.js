function showFormCreate1() {
    document.getElementById('main').innerHTML = `
    <div>
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="address" placeholder="Address">
    <input type="text" id="phoneNumber" placeholder="PhoneNumer">
    <input type="text" id="email" placeholder="Email">
    <input type="text" id="password" placeholder="PassWord">
    <button onclick="create1()">Thêm mới</button>
</div>
    `
}

function create1() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let newUser = {
        name: name,
        email: email,
        password: password,
    }

    axios.post('http://localhost:8080/user/add', newUser).then(function (response) {
        showHome1();
    })
}