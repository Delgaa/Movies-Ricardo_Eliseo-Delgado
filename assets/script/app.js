import {
    passSection, 
    filterGenres, 
    filterName, 
    repeatsGenre, 
    optionSelec
} from '../module/functions.js'

const $movies = document.getElementById("movies")

passSection(movies, $movies)

const $seacher = document.getElementById("searchName")
const $genreSelec = document.getElementById("selecGener")

$seacher.addEventListener("input", () => {
    const tiping = $seacher.value
    const listMoviesGenres = filterGenres(movies, $genreSelec.value)
    const nameMovies = filterName(listMoviesGenres, tiping)
    passSection(nameMovies, $movies)
    if (nameMovies.length == 0) {
        $movies.innerHTML = `<p class= "text-white text-2xl p-1 text-center">There is no movie with that name entered, try another one.</p>`
    }
})

const genresLists = repeatsGenre(movies)
$genreSelec.innerHTML += genresLists.reduce((acumul, genresList) => acumul += optionSelec(genresList))

$genreSelec.addEventListener("change", () => {
    const mosviesGenre = $genreSelec.value
    const listMoviesGenres = filterGenres(movies, mosviesGenre)
    passSection(listMoviesGenres, $movies)
})
