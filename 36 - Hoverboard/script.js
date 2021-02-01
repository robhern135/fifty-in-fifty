const container = document.getElementById('container')

const colors = ['#55CDFC', '#F7A8B8', '#ffffff', '#FF0018', '#FFA52C', "#FFFF41", "#008018", "#0000F9", "#86007D"]

const SQUARES = 500


for( let i = 0; i < SQUARES; i++ ){
  
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square) )
  square.addEventListener('mouseout', () => removeColor(square) )

  container.appendChild(square)

}

function setColor(element){
  
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element){
  
  setTimeout(
    function(){
      element.style.background="#1d1d1d"
      element.style.boxShadow = '0 0 2px #000'
    }
  , 1000)


}

function getRandomColor(){
  return colors[ Math.floor( Math.random() * colors.length ) ]
}