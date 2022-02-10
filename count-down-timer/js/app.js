let countdownEl = document.getElementById('countdown')

let timeLeft = 10

let timer = setInterval(function(){
  countdownEl.textContent = timeLeft + ' seconds remaining!'
  console.log('timerId', timer)
  timeLeft -= 1
  if (timeLeft < 0) {
    countdownEl.textContent = 'Finished!'
    confetti.start(500)
    clearInterval(timer)
  }
}, 1000)