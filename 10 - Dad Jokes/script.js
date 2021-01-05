const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//this would go in place of config in fetch but this is cleaner
const config = {
  headers: {
    'Accept': 'application/json'
  }
}

generateJoke();


jokeBtn.addEventListener('click', generateJoke)

//--can use fetch.then.then 
  // function generateJoke(){
  // fetch('https://icanhazdadjoke.com/', config)
  //   .then(res => res.json())
  //   .then(data => {
  //     jokeEl.innerHTML = data.joke
  //   })
  // }

//--or can use async await for smoother code
async function generateJoke(){
  const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}