function showHome() {
    axios.get('http://localhost:8080/cat')
        .then(function (response) {
                let catList = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tuổi</th>
            <th>Giống </th>
            <th>Màu sắc</th>
            <th>Ảnh</th>
            <th>Loại </th>
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < catList.length; i++) {
                    html += `
            <tr>
                <td>${catList[i].id}</td>
                <td>${catList[i].name}</td>
                <td>${catList[i].age}</td>
                <td>${catList[i].gender}</td>
                <td>${catList[i].color}</td>
                <td>${catList[i].image}</td>
                <td>${catList[i].breed.name}</td>
                <td><button onclick="showFormEdit(${catList[i].id})">Sửa</button</td>
                <td><button onclick="remove(${catList[i].id})">Xóa</button></td>
            </tr>
            `
                }
                html += '</table>'
                document.getElementById("main").innerHTML = html;
            }
        )
}

function remove(id) {
    let isConfirm = confirm("Chắc chắn chứ?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/cat/${id}`).then((response) => {
            alert("Xóa thành công");
            showHome();
        })
    } else {
        alert("Rảnh à")
    }
}

function searchByName() {
    let inSearch = document.getElementById("search").value;
    axios.get(`http://localhost:8080/cat/search?name=${inSearch}`)
        .then(function (response) {
            let catList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Color</th>
            <th>Image</th>
            <th>Breed</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0; i < catList.length; i++) {
                html += `        
        <tr>
            <td>${catList[i].id}</td>
            <td>${catList[i].name}</td>
            <td>${catList[i].age}</td>
            <td>${catList[i].gender}</td>
            <td>${catList[i].color}</td>
            <td>${catList[i].image}</td>
            <td><span>`
                for (let j = 0; j < catList[i].breed.length; j++) {
                    html += `${catList[i].breed[j].name}`;


                }
                html += `</span></td>
             <td></td>
            <td><button onclick="showFormEdit(${catList[i].id})">Sửa</button></td>
            <td><button onclick="remove(${catList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}

showHome()