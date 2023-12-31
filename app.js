const $movies = document.getElementById("movies")

let createArticle = function (img_p, title_p, tagline_p, descrption_p) {
    return `<article class = "bg-slate-300 w-[250px] border rounded-2xl h-[400px] flex flex-col items-center gap-4 pt-4 lg:w-[300px]">
    <img class = " w-[250px]" src= "${img_p}" alt="image of ${title_p}">
    <h2 class = "text-start w-[95%] text-xl font-bold">${title_p}</h2>
    <h3 class = "text-start w-[95%] font-medium" >${tagline_p}</h3>
    <p class = "text-start w-[95%] line-clamp-4">${descrption_p}</p>
    </article>`
}
let passSection = (arrMovies) => {
    let element = "" 
    for (const arrMovie of arrMovies) {
        element += createArticle(arrMovie.image, arrMovie.title, arrMovie.tagline, arrMovie.overview)
    }
    return element
}

$movies.innerHTML = passSection(movies)