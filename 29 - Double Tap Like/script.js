const loveMe = document.getElementById('loveMe')
const times = document.getElementById('times')

//Can use inbuild double click event
// loveMe.addEventListener('dblclick', (e) => {
//   console.log(123)
// })

// or make your own like:
let clickTime = 0

let timesClicked = 0

loveMe.addEventListener('click', (e) => {

  if(clickTime === 0){
    clickTime = new Date().getTime()
    // console.log(clickTime)
  } else {
    if ((new Date().getTime() - clickTime) < 800 ){
    
      createHeart(e)
      clickTime = 0

    } else {
      clickTime = new Date().getTime()
    }
  }

})

const createHeart = (e) => {
  const heart = document.createElement('i')
        heart.classList.add('fas')
        heart.classList.add('fa-heart')
  
  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  timesClicked = ++timesClicked

  times.innerText = timesClicked

  setTimeout( () => heart.remove(), 5000)

}