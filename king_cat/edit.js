function showFormEdit(id) {
    axios.get('http://localhost:8080/cat')
        .then(function (response) {
            let cat = {};
            let catList = response.data;
            for (let i = 0; i < catList.length; i++) {
                if (catList[i].id === id) {
                    cat  = catList[i]
                }
            }
            axios.get('http://localhost:8080/breed').then(function (response) {
                    let breeds = response.data;
                    let html = ` <div>
                    <input type="text" id="id" value="${cat.id}" placeholder="ID" readonly><br>
                    <input type="text" id="name" value="${cat.name}" placeholder="Name"><br>
                    <input type="text" id="age" value="${cat.age}" placeholder="Age"><br>
                     <input type="text" id="gender" value="${cat.gender}" placeholder="Gender"><br>
                     <input type="text" id="color" value="${cat.color}" placeholder="Color"><br>
                     <input type="text" id="image" value="${cat.image}" placeholder="Image"><br>
                    <select id="breedID">`;
                    for (let i = 0; i < breeds.length; i++) {
                        if (cat.breed.id == breeds[i].id) {
                            html += `<option value="${breeds[i].id}" selected>${breeds[i].name}</option>`
                        } else {
                            html += `<option value="${breeds[i].id}">${breeds[i].name}</option>`
                        }
                    }
                    html += `</select><br>
                    <button onclick="edit()">Thêm mới</button>
                    </div>`
                    document.getElementById("main").innerHTML = html;
                })
        })
}
function edit() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = +document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let color = document.getElementById("color").value;
    let image = document.getElementById("image").value;
    let breedID = +document.getElementById("breedID").value;
    let newCat = {
        name : name,
        age: age,
        gender:gender,
        color: color,
        image: image,
        breed: {
            id : breedID
        }

    }
    axios.put(`http://localhost:8080/cat/${id}`, newCat).then(function (response) {
        showHome();
    })
}