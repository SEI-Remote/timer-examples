const timerEl = document.getElementById('timer')
const resetBtn = document.getElementById('reset-button')
const startBtn = document.getElementById('start-button')
// Cached element references for the progress bars
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')
const hrBar = document.getElementById('hours')

let timerIntervalId
// Added hr to track hours
let hr, min, sec, seconds = 0


startBtn.addEventListener('click', init)
resetBtn.addEventListener('click', resetTimer)

function init() {
	// Ternary operator to swap the Start to Pause and
	// vice versa when it is pressed (so hot!)
  startBtn.textContent = (startBtn.textContent === "Start") ? "Pause" : "Start"
  if (timerIntervalId) {
    clearInterval(timerIntervalId)
		// We have to clear the timerIntervalId to allow
		// the ability to pause the timer
    timerIntervalId = null
  } else {
    startTimer()
  }
}

function resetTimer() {
  // Default the button text to Start on reset
	startBtn.textContent = "Start"
  clearInterval(timerIntervalId)
  seconds = 0
  timerIntervalId = null
  render()
}

function tick() {
  seconds++
	confetti.start(50)
  console.log(seconds)
  render()
}

function startTimer(){
  timerIntervalId = setInterval(tick, 1000)
}

function render() {
  min = Math.floor(seconds / 60)
  hr = Math.floor(seconds / 3600)
  sec = seconds % 60
  min = min % 60
  hr = hr % 24
  if (sec < 10) {
    timerEl.innerText = `${min}:0${sec}`
  } else {
    timerEl.innerText = `${min}:${sec}`
  }
	// Adjusting the style properties based on Bootstrap docs!
  secBar.style = `width: ${sec/60*100}%`
  secBar.innerText = sec
  minBar.style = `width: ${(min/60*100)}%`
  minBar.innerText = min
  hrBar.style = `width: ${(hr/24*100)}%`
  hrBar.innerText = hr
}