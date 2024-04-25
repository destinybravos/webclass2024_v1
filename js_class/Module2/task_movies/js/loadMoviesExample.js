// Needed Variable
let imgBaseUrl = 'https://image.tmdb.org/t/p/'
let imgSize = {
    normal: 'origanal',
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
        cards += `<div>
                        <a href="movie_detail.html?id=${movie.movie_id}" class="posters">
                            <img src="${imgBaseUrl + imgSize.small}/${movie.poster_path}" alt="">
                        </a>
                        <p>${movie.title}</p>
                    </div>
                `
    });

    document.getElementById('images').innerHTML = cards;
}


