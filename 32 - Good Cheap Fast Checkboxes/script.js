const toggles = document.querySelectorAll('.toggle'),
      good = document.getElementById('good'),
      cheap = document.getElementById('cheap'),
      fast = document.getElementById('fast')

toggles.forEach( toggle => toggle.addEventListener('change',  (e) => {
  doTheTrick(e.target)
}) )


const doTheTrick = (theClickedOne) => {

  if( good.checked && cheap.checked && fast.checked ){

    if( good === theClickedOne ){
      fast.checked = false
    }
    if( cheap === theClickedOne ){
      good.checked = false
    }
    if( fast === theClickedOne ){
      cheap.checked = false
    }

  }

}