const nums = document.querySelectorAll('.nums span'),
      counter = document.querySelector('.counter'),
      finalMessage = document.querySelector('.final'),
      replay = document.getElementById('replay')

runAnimation()

function runAnimation(){

  nums.forEach( ( num, idx ) => {

    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {

      //check if animation finished is in and if its not the last
      if(e.animationName === 'goIn' && idx !== nextToLast){
        num.classList.remove('in')
        num.classList.add('out')
        //check if its out, and if theres a sibling
      } else if (e.animationName === 'goOut' && num.nextElementSibling){
        num.nextElementSibling.classList.add('in')
      } else {
        num.classList.add('out')
        setTimeout(() => {
          counter.classList.add('hide')
          finalMessage.classList.add('show')
        }, 500)

        

      }


    })

  })

}

function resetDom(){
  
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach( (num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')

}

replay.addEventListener('click', resetDom)