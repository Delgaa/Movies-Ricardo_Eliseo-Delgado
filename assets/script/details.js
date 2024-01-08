
const urlParams = new URLSearchParams(window.location.search)
const peliculaId = urlParams.get("id")

const pelicula = movies.find(movie => movie.id == peliculaId)
console.log(pelicula);

const mostrarImgDetalles = function () {
    return `
    <img src= "${pelicula.image}">
        <div>
            <h2 class ="text-white">${pelicula.title.toUpperCase()}</h2>
            <h3 class ="text-white">${pelicula.tagline}</h3>
            <h3 class ="text-white">${pelicula.genres}</h3>
            <p class ="text-white">${pelicula.overview}</p>
        </div>
    `
}

const $divDetails = document.getElementById("detailsMovies")
$divDetails.innerHTML = mostrarImgDetalles()

const mostrarDatoTable1 = function () {
    return`
    <tr class = "text-white">
        <td class="border border-solid border-white p-2">${pelicula.original_language}</td>
        <td class="border border-solid border-white p-2">${pelicula.release_date}</td>
        <td class="border border-solid border-white p-2">${pelicula.runtime} mins</td>
        <td class="border border-solid border-white p-2">${pelicula.status}</td>
    </tr>
    `
}
const $dateTable1 = document.getElementById("dataTable1")
$dateTable1.innerHTML = mostrarDatoTable1()

const mostrarDatoTable2 = function () {
    return`
    <tr class = "text-white">
        <td class="border border-solid border-white p-2">${pelicula.vote_average.toFixed(2)*10} %</td>
        <td class="border border-solid border-white p-2">${pelicula.budget}</td>
        <td class="border border-solid border-white p-2">${pelicula.revenue}</td>
    </tr>
    `
}
const $dateTable2 = document.getElementById("dataTable2")
$dateTable2.innerHTML = mostrarDatoTable2()