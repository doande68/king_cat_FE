document.addEventListener('DOMContentLoaded', function() {
  // Định nghĩa URL của API để lấy thông tin của thú cưng
  const apiUrl = 'URL_CUA_API_THU_CUNG';

  // Lấy thẻ #pet-list để thêm các card thú cưng vào
  const petList = document.getElementById('pet-list');

  // Gọi hàm để tải dữ liệu từ API
  fetchData(apiUrl);

  // Hàm để tải dữ liệu từ API
  function fetchData(url) {
    axios.get(url)
    .then(response => {
      // Duyệt qua mỗi thú cưng trong dữ liệu và tạo ra các card
      response.data.forEach(pet => {
        const petCard = createPetCard(pet);
        // Thêm card vào danh sách thú cưng
        petList.appendChild(petCard);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  }

  // Hàm để tạo ra một card thú cưng
  function createPetCard(pet) {
    const card = document.createElement('div');
    card.classList.add('pet-card');

    // Tạo các phần tử HTML để hiển thị thông tin thú cưng
    const name = document.createElement('h3');
    name.textContent = pet.name;

    const species = document.createElement('p');
    species.textContent = `Species: ${pet.species}`;

    const age = document.createElement('p');
    age.textContent = `Age: ${pet.age}`;

    const description = document.createElement('p');
    description.textContent = pet.description;

    // Thêm các phần tử vào card
    card.appendChild(name);
    card.appendChild(species);
    card.appendChild(age);
    card.appendChild(description);

    return card;
  }
});