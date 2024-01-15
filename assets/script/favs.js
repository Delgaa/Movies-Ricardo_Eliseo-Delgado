import {
    passSection,
    deleteData,
    ordendigMovies,
    comparation,
    refrechButton
} from '../module/functions.js'

const $movies = document.getElementById("moviesFavorites")

const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const petition = {
    headers:{
        'x-api-key': apiKey
    }
}

fetch('https://moviestack.onrender.com/api/movies', petition)
    .then(response => response.json())
    .then(data=>{

        const movies = data.movies
        const moviesFavorites = JSON.parse(localStorage.getItem('moviesFavorites'))
        const noFavorites = `<p class= "text-white text-2xl p-1 text-center">You don't have any favorite movies, please go back to movies and add one.</p>`
        
        let moviesFavorite = comparation(movies, moviesFavorites)
        let ordenedMoviesFavorites = ordendigMovies(moviesFavorite, 'title')
        passSection(ordenedMoviesFavorites, $movies)

        moviesFavorites.length == 0 ? $movies.innerHTML = noFavorites : refrechButton(moviesFavorite)

        $movies.addEventListener('click', (e) => {
            if (e.target.dataset.fav == "painted"){
                if (e.target.parentElement.classList.contains("bg-red-500")) {
                    e.target.parentElement.classList.remove("bg-red-500")
                    deleteData(e, moviesFavorites)
                    moviesFavorite = comparation(movies, moviesFavorites)
                    ordenedMoviesFavorites = ordendigMovies(moviesFavorite, 'title')
                    passSection(ordenedMoviesFavorites, $movies)
                    refrechButton(moviesFavorite)
                    localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites))

                    moviesFavorites.length == 0 ? $movies.innerHTML = noFavorites : refrechButton(moviesFavorite)
                }
            }
        })
    })
    .catch(err=> console.log(err))