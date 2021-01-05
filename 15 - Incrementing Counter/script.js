const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    // adding + before a variable turns it into a number
    const target = +counter.getAttribute('data-target')

    const c = +counter.innerText

    const increment = target / 200

    if( c < target ){
                          //Math.ceil rounds a number up 
      counter.innerText = `${Math.ceil(c + increment)}`

      //wait 1ms before running again
      setTimeout(updateCounter, 1)

    } else {

      counter.innerText = target
    
    }


  }

  updateCounter()

})

