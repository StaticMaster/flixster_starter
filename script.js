// API POINTS
const moviesearchEl= document.querySelector("#moviesearch")  
const APIkey= "e58d19d46cc869a4aa7be5ac22a24e35" 
const buttonEl= document.querySelector("#Submit")
let movieArea= document.querySelector("#movie-grid");
let movieCard= document.querySelector("#movie-card");
let movieForm= document.querySelector("form");
const mBox= document.querySelector("#Button");
const page = 1

movieForm.addEventListener("submit", (evt) =>{
    movieArea.innerHTML = ``;
    evt.preventDefault();
    console.log("evt.target.movie.value -", evt.target.movie.value);
    let apiUrl= "https://api.themoviedb.org/3/search/movie?api_key=" + APIkey +"&language=en-US&query=" + evt.target.movie.value + "&page=" + page + "&include_adult=false"

    console.log(apiUrl);
    console.log(getResults(apiUrl));
})
async function getResults(apiUrl){
    let response= await fetch(apiUrl);
    console.log("response is ", response);
    let responseData= await response.json();
    displayResults(responseData);
    return responseData;
   
}

async function NowPlaying(){  
    let apiUrl= "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIkey + "&language=en-US"
    let response= await fetch(apiUrl);
    console.log("now-playing ", response);
    let responseData= await response.json();
    displayResults(responseData);
    return responseData;
      
}

function displayResults(movieData) { 
    for (let i = 0; i < movieData.results.length; i++) {
        if (movieData.results[i].backdrop_path){ 
            movieArea.innerHTML += `
            <div>
                <img src="https://image.tmdb.org/t/p/w500${movieData.results[i].backdrop_path}" alt="">
                <p>${movieData.results[i].title}</p>
                <p>${movieData.results[i].vote_average}/10</p>
            </div>
            `}
        else{
            movieArea.innerHTML += `
            <div>
                <img src="image-not-found.png" alt="Image Not Found" height="300">
                <p>${movieData.results[i].title}</p>
                <p>${movieData.results[i].vote_average}/10</p>
            </div>
            `}
        }
        
    }

    window.onload = function(){
        NowPlaying();
            } 


            function setHalfVolume() {
                var myAudio = document.getElementById("audio1");
                myAudio.volume = 0.3
            }
