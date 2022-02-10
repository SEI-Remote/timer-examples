const timerEl = document.getElementById('timer')
const winBtn = document.getElementById('win-button')
const winMsg = document.getElementById('message')
const resetBtn = document.getElementById('reset-button')

let timerIntervalId
let winTime, min, sec, seconds = 0

winBtn.addEventListener('click', handleClickWin)
resetBtn.addEventListener('click', startTimer)

startTimer()

function startTimer() {
  // Check for an active timer interval
  if (timerIntervalId) {
    // If interval exists:
      // clear it and reset seconds to zero
      seconds = 0
      clearInterval(timerIntervalId)
      // Reset winMsg HTML element 
      renderMessage('PRESS THE BUTTON TO WIN!!!')
  }
	// Start a new timer interval
  timerIntervalId = setInterval(tick, 1000)
}

function handleClickWin() {
  confetti.start(500)
  let message
  // Set winTime to the current value of seconds
  winTime = seconds
  // Set a message in winMsg with min/sec of the win button press
  if (min < 1) { 
    message = `YAAAAY, you won in ${sec} seconds!`
  } else if (min < 2) {
    message = `YAAAAY, you won in ${min} minute and ${sec} seconds!`
  } else {
    message = `YAAAAY, you won in ${min} minutes and ${sec} seconds!`
  }
  // Pass the message to renderMessage
  renderMessage(message)
}

function tick() {
  console.log(seconds)
  // Increment seconds by 1
  seconds++
	// Call renderTime function
  renderTime()
}

function renderMessage(message) {
  // Render the 'win' message
  winMsg.textContent = message
}

function renderTime() {
  // Calculate min/sec
  min = Math.floor(seconds / 60)
  sec = seconds % 60
  // Display current min/sec in the timerEl element
  if (sec < 10) {
    timerEl.innerText = `${min}:0${sec}`
  } else {
    timerEl.innerText = `${min}:${sec}`
  }
}