import {
    passSection,
    deleteData,
    ordendigMovies,
    refrechButton
} from '../module/functions.js'

const $movies = document.getElementById("moviesFavorites")

/* const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const petition = {
    headers:{
        'x-api-key': apiKey
    }
}
fetch('https://moviestack.onrender.com/api/movies', petition)
    .then(response => response.json())
    .then(data=>{})
    .catch(err => console.log(err)) */

const moviesFavorites = JSON.parse(localStorage.getItem('moviesFavorites'))
const ordenedMoviesFavorites = ordendigMovies(moviesFavorites, 'title')
passSection(ordenedMoviesFavorites, $movies)
/* $movies.childNodes.forEach(node => node.lastElementChild.firstElementChild.classList.add("bg-red-500")) */
refrechButton(moviesFavorites)

if (moviesFavorites.length == 0) {
    $movies.innerHTML = `<p class= "text-white text-2xl p-1 text-center">You don't have any favorite movies, please go back to movies and add one.</p>`
}
$movies.addEventListener('click', (e) => {

    if (e.target.dataset.fav == "painted"){

        if (e.target.parentElement.classList.contains("bg-red-500")) {

            e.target.parentElement.classList.remove("bg-red-500")
            deleteData(e, moviesFavorites)
            passSection(moviesFavorites, $movies)
            $movies.childNodes.forEach(node => node.lastElementChild.firstElementChild.classList.add("bg-red-500"))
            if (moviesFavorites.length == 0) {
                $movies.innerHTML = `<p class= "text-white text-2xl p-1 text-center">You don't have any favorite movies, please go back to movies and add one.</p>`
            }
            localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites))
        }
    }
})