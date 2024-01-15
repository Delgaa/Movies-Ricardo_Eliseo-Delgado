import {
    passSection, 
    filterGenres, 
    filterName, 
    repeatsGenre, 
    optionSelec,
    ordendigMovies,
    loadingDate,
    deleteData,
    refrechButton
} from '../module/functions.js'
const $movies = document.getElementById("movies")
const $seacher = document.getElementById("searchName")
const $genreSelec = document.getElementById("selecGener")



const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const petition = {
    headers:{
        'x-api-key': apiKey
    }
}

fetch('https://moviestack.onrender.com/api/movies', petition)
    .then(response => response.json())
    .then(data=>{

        const moviesOrdened = ordendigMovies(data.movies, 'title')
        passSection(moviesOrdened, $movies)

        const moviesFavorites = JSON.parse(localStorage.getItem('moviesFavorites'))
        refrechButton(moviesFavorites)

        $seacher.addEventListener("input", () => {
            const tiping = $seacher.value
            const listMoviesGenres = filterGenres(moviesOrdened, $genreSelec.value)
            const nameMovies = filterName(listMoviesGenres, tiping)
            passSection(nameMovies, $movies)
            refrechButton(moviesFavorites)
            if (nameMovies.length == 0) {
                $movies.innerHTML = `<p class= "text-white text-2xl p-1 text-center">There is no movie with that name entered, try another one.</p>`
            }
        })

        $movies.addEventListener('click', (e) => {
            const parent = e.target.parentElement.classList
            if (e.target.dataset.fav == "painted") {

                if (!parent.contains("bg-red-500")) {
                    parent.add("bg-red-500")
                    e.target.title = "Remove from favorites"
                    moviesFavorites.push(loadingDate(e))
                    localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites))

                }else if (parent.contains("bg-red-500")) {
                    parent.remove("bg-red-500")
                    e.target.title = "Add to favorites"
                    deleteData(e, moviesFavorites)
                    localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites))
                }
            }
        })

        const genresLists = repeatsGenre(moviesOrdened)
        let listaGenros = genresLists.reduce((acumul, genresList) => acumul += optionSelec(genresList), "")
        $genreSelec.innerHTML += listaGenros

        $genreSelec.addEventListener("change", () => {
            const mosviesGenre = $genreSelec.value
            const nameMovies = filterName(moviesOrdened, $seacher.value)
            const listMoviesGenres = filterGenres(nameMovies, mosviesGenre)
            passSection(listMoviesGenres, $movies)
            refrechButton(moviesFavorites)
            if (listMoviesGenres.length == 0) {
                $movies.innerHTML = `<p class= "text-white text-2xl p-1 text-center">There is no movie with that name entered, try another one.</p>`
            }
        })
    })
    .catch(err=> console.log(err))

