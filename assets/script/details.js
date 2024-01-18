import {
    imgDetails, 
    infoTable1, 
    infoTable2
} from '../module/functions.js'

const $divDetails = document.getElementById("detailsMovies")
const $dateTable1 = document.getElementById("dataTable1")
const $dateTable2 = document.getElementById("dataTable2")

const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const petition = {
    headers:{
        'x-api-key': apiKey
    }
}

fetch('https://moviestack.onrender.com/api/movies', petition)
    .then(response => response.json())
    .then(data=>{
        const movies = data.movies

        const urlParams = new URLSearchParams(window.location.search)
        const movieId = urlParams.get("id")

        const movieDetails = movies.find(movie => movie.id == movieId)

        $divDetails.innerHTML = imgDetails(movieDetails)

        $dateTable1.innerHTML = infoTable1(movieDetails)

        $dateTable2.innerHTML = infoTable2(movieDetails)
    
})