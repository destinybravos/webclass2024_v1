// Get Movie ID from URL
let url = new URL(location.href);
let movieId = url.searchParams.get('id');
let movie = undefined;
let imgBaseUrl = 'https://image.tmdb.org/t/p/'
let imgSize = {
    normal: 'original',
    small: 'w500'
}

// 
fetch('database/movies.json')
.then((res) => res.json())
.then((movies) => {
    movies.forEach((movie_data) => {
        if (movie_data.movie_id == movieId) {
            movie = movie_data;
        }
    });
})


window.setTimeout(() => {
    loadMovieDetails();
}, 2000)

let loadMovieDetails = () => {
    let movieBackdrop = document.getElementById('movie_backdrop');
    let loaderBackdrop = document.getElementById('loader_overlay');

    document.getElementById('poster_img').src = imgBaseUrl + imgSize.small + movie.poster_path;
    document.getElementById('movie_title').innerText = movie.title;
    document.getElementById('released_date').innerText = movie.release_date;
    movieBackdrop.style.backgroundImage = `url('${imgBaseUrl + imgSize.small + movie.backdrop_path}')`;

    movieBackdrop.classList.remove('hidden')
    loaderBackdrop.classList.add('hidden')
}





