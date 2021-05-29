fetch(`http://www.omdbapi.com/?apikey=fc76c0a9&s=one`)
  .then((m) => m.json())
  .then((m) => {
    const movies = m.Search;
    let data = "";
    movies.forEach((m) => {
      data += `
      <div class="col-md-4 my-3">
        <div class="card">
          <img src="${m.Poster}" class="img-fluid">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary">See Details</a>
          </div>
        </div>
      </div>
      `;
    });

    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = data;
  });
