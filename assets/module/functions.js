export let createArticle = function (arrMovie_p) {
    return `<article class = "bg-slate-300 w-[250px] border rounded-2xl h-[400px] flex flex-col items-center gap-4 pt-4 lg:w-[300px]">
    <img class = " w-[250px]" src= "${arrMovie_p.image}" alt="image of ${arrMovie_p.title}">
    <h2 class = "text-start w-[95%] text-xl font-bold">${arrMovie_p.title}</h2>
    <h3 class = "text-start w-[95%] font-medium" >${arrMovie_p.tagline}</h3>
    <p class = "text-start w-[95%] line-clamp-4">${arrMovie_p.overview}</p>
    <a class = "self-end mb-1 mr-1 bg-blue-600 p-1 px-2 text-white rounded-xl" href="../pages/details.html?id=${arrMovie_p.id}">Show more</a>
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
    return [...set1]
}
export function optionSelec(genre) {
    return `<option value="${genre}">${genre}</option>`
}
export const imgDetails = function (movieDetails_p) {
    return `
    <img class = "min-[450px]:w-[450px]" src= "${movieDetails_p.image}" alt="image of ${movieDetails_p.title}">
        <div class =" flex flex-col gap-7">
            <h2 class ="text-white font-bold">${movieDetails_p.title.toUpperCase()}</h2>
            <h3 class ="text-white font-medium">${movieDetails_p.tagline}</h3>
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