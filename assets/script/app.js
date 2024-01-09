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
})

const genresLists = repeatsGenre(movies)
$genreSelec.innerHTML += genresLists.reduce((acumul, genresList) => acumul += optionSelec(genresList))

$genreSelec.addEventListener("change", () => {
    const mosviesGenre = $genreSelec.value
    const listMoviesGenres = filterGenres(movies, mosviesGenre)
    passSection(listMoviesGenres, $movies)
})
