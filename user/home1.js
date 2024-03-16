function showHome1() {
    axios.get('http://localhost:8080/user')
        .then(function (response) {
                let userList = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber </th>
            <th>Email</th>
            <th>PassWord</th>
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < userList.length; i++) {
                    html += `
            <tr>
                <td>${userList[i].id}</td>
                <td>${userList[i].name}</td>
                <td>${userList[i].address}</td>
                <td>${userList[i].phoneNumber}</td>
                <td>${userList[i].email}</td>
                <td>${userList[i].password}</td>
               <td><button onclick="showFormEdit1(${userList[i].id})">Sửa</button</td>
                <td><button onclick="remove1(${userList[i].id})">Xóa</button></td>
            </tr>
            `
                }
                html += '</table>'
                document.getElementById("main").innerHTML = html;
            }
        )
}

function remove1(id) {
    let isConfirm = confirm("Chắc chắn chứ?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/user/${id}`).then((response) => {
            alert("Xóa thành công");
            showHome1();
        })
    } else {
        alert("Rảnh à")
    }
}

function searchByName() {
    let inSearch = document.getElementById("search").value;
    axios.get(`http://localhost:8080/user/search?name=${inSearch}`)
        .then(function (response) {
            let userList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber </th>
            <th>Email</th>
            <th>PassWord</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0; i < userList.length; i++) {
                html += `        
        <tr>
                <td>${userList[i].id}</td>
                <td>${userList[i].name}</td>
                <td>${userList[i].address}</td>
                <td>${userList[i].phoneNumber}</td>
                <td>${userList[i].email}</td>
                <td>${userList[i].password}</td>
            <td><button onclick="showFormEdit1(${userList[i].id})">Sửa</button></td>
            <td><button onclick="remove1(${userList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}

showHome1()