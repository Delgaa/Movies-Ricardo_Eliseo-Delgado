export let createArticle = function (arrMovie_p) {
    return `<article id ="${arrMovie_p.id}" class = "bg-slate-300 w-[250px] rounded-2xl h-[400px] flex flex-col items-center justify-between lg:w-[300px]">
    <img class = " w-full rounded-t-2xl" src= "https://moviestack.onrender.com/static/${arrMovie_p.image}" alt="image of ${arrMovie_p.title}">
    <h2 class = "px-2 2self-start text-xl font-bold">${arrMovie_p.title}</h2>
    <h3 class = "px-2 self-start font-medium line-clamp-1" >${arrMovie_p.tagline}</h3>
    <p class = "px-2 line-clamp-2">${arrMovie_p.overview}</p>
        <div class= "px-2 pb-2 flex justify-between w-full ">
            <div class = "flex flex-col ">
                <span>Add to favs</span>
                <button data-id="${arrMovie_p.id}" class="flex justify-center items-center rounded-full">
                <i data-fav= "painted" class="fa-regular fa-heart text-black text-2xl ml-1 hover:text-red-600" title ="Add to favorite"></i>
                </button>
            </div>
            <a class = "self-center bg-blue-600 p-1 px-2 text-white rounded-xl" href="../pages/details.html?id=${arrMovie_p.id}">Show more</a>
        </div>
    </article>`
}

export let passSection = (arrMovies, element) => {
    let list = ""
    for (const arrMovie of arrMovies) {
        list += createArticle(arrMovie)
    }
    element.innerHTML = list
}

export function filterGenres(arrMovies, genreSelec) {
    if (genreSelec == "all") {
        return arrMovies
    }
    return arrMovies.filter(arrMovie => arrMovie.genres.includes(genreSelec))
}

export function filterName(moviesArr, nameFilter) {
    return moviesArr.filter(movie => movie.title.toLowerCase().includes(nameFilter.toLowerCase()))
}

export function repeatsGenre(arrMovies) {
    const genres = arrMovies.map(arrMovie => arrMovie.genres).flat()
    const set1 = new Set(genres)
    const arraySet =  [...set1].toSorted()
    return arraySet
}

export function optionSelec(genre) {
    return `<option value="${genre}">${genre}</option>`
}

export function ordendigMovies (mmovies, propiety) {
    const ordened = mmovies.filter(movie => movie[propiety])
    .toSorted((a, b) =>{
        if (a[propiety] < b[propiety]) {
            return -1
        }
        if (a[propiety] > b[propiety]) {
            return 0
        }
    })
return ordened
}

export const imgDetails = function (movieDetails_p) {
    return `
    <img class = "min-[450px]:w-[450px]" src= "https://moviestack.onrender.com/static/${movieDetails_p.image}" alt="image of ${movieDetails_p.title}">
        <div class =" flex flex-col gap-7">
            <h2 class ="text-white font-bold">${movieDetails_p.title.toUpperCase()}</h2>
            <h3 class ="text-white font-medium min-[550px]:w-[450px]">${movieDetails_p.tagline}</h3>
            <h3 class ="text-white">${movieDetails_p.genres.join(", ")}</h3>
            <p class ="text-white min-[550px]:w-[450px]">${movieDetails_p.overview}</p>
        </div>
    `
}

export const infoTable1 = function (movieDetails_p) {
    return`
    <tr class = "text-white flex flex-col">
        <td class="border border-solid border-white border-collapse p-2 w-[150px]">${movieDetails_p.original_language}</td>
        <td class="border border-solid border-white border-collapse p-2 w-[150px]">${movieDetails_p.release_date}</td>
        <td class="border border-solid border-white border-collapse p-2 w-[150px]">${movieDetails_p.runtime} mins</td>
        <td class="border border-solid border-white border-collapse p-2 w-[150px]">${movieDetails_p.status}</td>
    </tr>
    `
}

export const infoTable2 = function (movieDetails_p) {
    return`
    <tr class = "text-white flex flex-col">
        <td class="border border-solid border-white border-collapse p-2 w-[150px] text-center">${movieDetails_p.vote_average.toFixed(2)} %</td>
        <td class="border border-solid border-white border-collapse p-2 w-[150px] text-center">USD ${movieDetails_p.budget.toLocaleString()}</td>
        <td class="border border-solid border-white border-collapse p-2 w-[150px] text-center">USD ${movieDetails_p.revenue.toLocaleString()}</td>
    </tr>
    `
}

export function loadingDate(evento) {
    const datosFavorites = {
        id: evento.target.parentElement.dataset.id,
    }
    return datosFavorites
}

export function deleteData(evento, favs) {
    const movie = favs.findIndex(movie => movie.id == evento.target.parentElement.dataset.id)
    favs.splice(movie, 1)
}

export function refrechButton (moviesFavorite_p) {
    const $buttons = document.querySelectorAll('button')
    $buttons.forEach(button => {

        for (const favorie of moviesFavorite_p) {

            if (button.dataset.id == favorie.id) {
                button.parentElement.innerHTML = `<span>Delet Fav</span>
                <button data-id="${button.dataset.id}" class="flexjustify-center items-center rounded-full">
                <i data-fav= "painted" class="fa-solid fa-heart text-red-600 text-2xl ml-1 hover:text-red-600" title ="Remove to favorite"></i>`
                button.lastElementChild.title = "Remove from favorites"
            }
        }
    })
}

export function comparation(movies_p, moviesFavorites_p){
    const movieOnFav = movies_p.filter(movie =>{
        for (const moviesFavorite of moviesFavorites_p) {
            if (moviesFavorite.id == movie.id) {
                return movie
            }
        }
    })
    return movieOnFav
}