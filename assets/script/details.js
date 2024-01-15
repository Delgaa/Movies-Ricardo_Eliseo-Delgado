import {
    imgDetails, 
    infoTable1, 
    infoTable2
} from '../module/functions.js'

const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("id")

const movieDetails = movies.find(movie => movie.id == movieId)

const $divDetails = document.getElementById("detailsMovies")
$divDetails.innerHTML = imgDetails(movieDetails)

const $dateTable1 = document.getElementById("dataTable1")
$dateTable1.innerHTML = infoTable1(movieDetails)

const $dateTable2 = document.getElementById("dataTable2")
$dateTable2.innerHTML = infoTable2(movieDetails)