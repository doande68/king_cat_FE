function showFormEdit1(id) {
    axios.get('http://localhost:8080/user')
        .then(function (response) {
            let user = {};
            let userList = response.data;
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].id === id) {
                    user  = userList[i]
                }
            }

                let html = ` <div>
                    <input type="text" id="id" value="${user.id}" placeholder="ID" readonly><br>
                    <input type="text" id="name" value="${user.name}" placeholder="Name"><br>
                    <input type="text" id="address" value="${user.address}" placeholder="Age"><br>
                     <input type="text" id="phoneNumber" value="${user.phoneNumber}" placeholder="phoneNumber"><br>
                     <input type="text" id="email" value="${user.email}" placeholder="Email"><br>
                     <input type="text" id="password" value="${user.password}" placeholder="password"><br>
                    <button onclick="edit1()">Thêm mới</button>
                    </div>`
                document.getElementById("main").innerHTML = html;
            })

}
function edit1() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let address = +document.getElementById("address").value;
    let phoneNumber =+ document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let passwors = document.getElementById("password").value;

    let newUser = {
        name : name,
        address: address,
        phoneNumber:phoneNumber,
        email: email,
        passwors:passwors,

    }
    axios.put(`http://localhost:8080/user/${id}`, newUser).then(function (response) {
        showHome1();
    })
}