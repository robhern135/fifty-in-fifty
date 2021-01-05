const API_KEY = 'd23b3e7c328d7a2c34d8c68f7f9a40f8'

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//get initial movies
getMovies(API_URL)

async function getMovies(url){
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies){

  main.innerHTML = ''

  movies.forEach( (mv) => {

    const { title, poster_path, vote_average, overview } = mv

    const movieEl = document.createElement('div')

    movieEl.classList.add('movie')

    movieEl.innerHTML =
    `
    <img src="${IMG_PATH + poster_path}" alt="${title + ' poster'}" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `

    main.appendChild(movieEl)
  
  })



}

function getClassByRate(vote){
  if(vote >= 8 ){
    return 'green'
  } else if(vote >= 5){
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  
  e.preventDefault()

  const searchTerm = search.value

  if( searchTerm && searchTerm !== '' ){
    getMovies(SEARCH_API + searchTerm )
  
    search.value = ''

  } else {

    window.location.reload()

  }

})