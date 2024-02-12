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
        let moviesFavorites = JSON.parse(localStorage.getItem('moviesFavorites')) || []
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
            if (e.target.dataset.fav == "painted") {

                if (e.target.classList.contains("fa-regular")) {
                    console.log([e.target]);
                    e.target.parentElement.parentElement.innerHTML = `<span>Delet Fav</span>
                    <button data-id="${e.target.parentElement.dataset.id}" class="flexjustify-center items-center rounded-full">
                    <i data-fav= "painted" class="fa-solid fa-heart text-red-600 text-2xl ml-1 hover:text-red-600" title ="Remove to favorite"></i>`
                    e.target.title = "Remove from favorites"
                    moviesFavorites.push(loadingDate(e))
                    localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites))

                }else if (!e.target.classList.contains("fa-regular")) {
                    console.log([e.target]);
                    e.target.parentElement.parentElement.innerHTML = `<span>Add to favs</span>
                    <button data-id="${e.target.parentElement.dataset.id}" class="flexjustify-center items-center rounded-full">
                    <i data-fav= "painted" class="fa-regular fa-heart text-black text-2xl ml-1 hover:text-red-600" title ="Add to favorite"></i>`
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

