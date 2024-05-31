let n = 1

axios.get(`https://rickandmortyapi.com/api/character/1,2,3,4`)
  .then(response => {
    const data = response.data;
    const container = document.getElementById('container-cards');
    data.forEach(item => {
      const card = `
      <div class="col-lg-3">
        <div class="card border-dark bg-secondary text-dark">
          <img src="${item.image}" class="card-img-top" alt="${item.descripcion}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-center">${item.species}</p>
          </div>
        </div>
        </div>
      `;
      container.innerHTML += card;
    });
  })
  .catch(error => {
    console.error('Hubo un error al consultar la API:', error);
  });
