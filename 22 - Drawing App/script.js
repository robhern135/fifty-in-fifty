const canvas = document.getElementById('canvas')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const clearBtn = document.getElementById('clear')
const colorEl = document.getElementById('color')

const ctx = canvas.getContext('2d')

let size = 20
let color = 'black'
let isPressed = false

sizeEl.innerHTML = size

let x, y
                //mousedown is click and hold down
canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  //set x and y to mouse position on click and hold
  x = e.offsetX
  y = e.offsetY

})

                //mouseup is release of click
canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined

})

canvas.addEventListener('mousemove', (e) => {
  
  if(isPressed === true){
    let x2 = e.offsetX,
        y2 = e.offsetY
    
    drawCircle( x2 , y2 )
    drawLine( x, y, x2 , y2 )

    x = x2, y = y2
  }
  


})

function updateSizeOnScreen(){
  sizeEl.innerText = size
}

function drawCircle( x , y ){
  ctx.beginPath()
                  //Math.PI is to make a circumference
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

            //startx, starty, endx, endy
function drawLine( x1, y1, x2, y2 ){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

increaseBtn.addEventListener('click', () => {

  size += 5

  if(size > 50){
    size = 50
  }

  updateSizeOnScreen()

})

decreaseBtn.addEventListener('click', () => {

  size -= 5

  if(size < 5){
    size = 5
  }

  updateSizeOnScreen()

})

clearBtn.addEventListener( 'click', () => ctx.clearRect(0, 0, canvas.width, canvas.height) )

colorEl.addEventListener('change', (e) => {
  color = e.target.value
})