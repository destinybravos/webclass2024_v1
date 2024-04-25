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
    loadMovies(data);
})

let loadMovies = (movieList) =>{

    movies = movieList;
}

document.getElementById('loadMovies').addEventListener('click', () => {
    console.log(movies);
})
