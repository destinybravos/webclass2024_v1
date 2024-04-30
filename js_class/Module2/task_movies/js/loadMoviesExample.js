// Needed Variable
let imgBaseUrl = 'https://image.tmdb.org/t/p/'
let imgSize = {
    normal: 'original',
    small: 'w500'
}

// Get Movie Data into an array
let movies = [];
fetch('database/movies.json')
.then((res) => res.json())
.then((data) => {
    loadMovies(data)
})

let loadMovies = (movieList) => {
    let cards = '';
    movieList.forEach((movie) => {
        cards += `<a href="movie_detail.html?id=${movie.movie_id}" class="posters">
                        <div class="image_container">
                            <img src="${imgBaseUrl + imgSize.small}/${movie.poster_path}" alt="">
                        </div>
                        <h3>
                            ${movie.title}
                        </h3>
                        <p>
                            ${movie.Director}
                        </p>
                        <span>Released: ${movie.release_date}</span>
                    </a>`;
    });

    document.getElementById('content-grid').innerHTML = cards;
}


