const $movies = document.getElementById("movies")

let createArticle = function (arrMovie_p) {
    return `<article class = "bg-slate-300 w-[250px] border rounded-2xl h-[400px] flex flex-col items-center gap-4 pt-4 lg:w-[300px]">
    <img class = " w-[250px]" src= "${arrMovie_p.image}" alt="image of ${arrMovie_p.title}">
    <h2 class = "text-start w-[95%] text-xl font-bold">${arrMovie_p.title}</h2>
    <h3 class = "text-start w-[95%] font-medium" >${arrMovie_p.tagline}</h3>
    <p class = "text-start w-[95%] line-clamp-4">${arrMovie_p.overview}</p>
    <a class = "self-end mb-1 bg-blue-600 p-1 px-2 text-white rounded-xl" href="../pages/details.html?id=${arrMovie_p.id}">Show more</a>
    </article>`
}
let passSection = (arrMovies) => {
    let element = "" 
    for (const arrMovie of arrMovies) {
        element += createArticle(arrMovie)
    }
    return element
}

$movies.innerHTML += passSection(movies)