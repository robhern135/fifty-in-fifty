const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const dateEl = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData(){
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="image" />'

  title.innerHTML = 'Lorem ipsum dolor sit amet.'

  excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, animi?'

  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="author portrait">'
  
  nameEl.innerHTML = 'John Doe'

  dateEl.innerHTML = '02 Jan 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}

setTimeout( getData, 2000)