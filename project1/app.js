const time= document.getElementById("time");
const startBtn= document.getElementById("startBtn");
const stopBtn= document.getElementById("stopBtn");
const resetBtn= document.getElementById("resetBtn");


let startTime = null ;
let elapsed= 0;
let timerId= null;
let running = false;



startBtn.addEventListener("click", () => {
    console.log("start clicked")
    start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  

});

stopBtn.addEventListener("click" , () => {
    console.log("stop clicked")
      if (!running) return;
    clearInterval(timerId);
    elapsed = performance.now() - startTime;
    running = false;
    timerId = null;
     startBtn.disabled = false;
    stopBtn.disabled = true;
});

resetBtn.addEventListener("click" , () => {
    console.log("reset clicked")
    if (running) clearInterval(timerId);
    elapsed = 0;
    startTime = null;
    running = false;
    timerId = null;
    updateDisplay();
     startBtn.disabled = false;
    stopBtn.disabled = true;
});

// start button logic;
function start(){
    if(running) return;
    running = true;
    startTime= performance.now() - elapsed;

    timerId =setInterval(() => {
        elapsed=performance.now() - startTime;
        updateDisplay();
    },100)
}



function formatTime(ms) {
    const totalSeconds = Math.floor(ms/1000)  //It will convert ms to s.
    const minutes = Math.floor(totalSeconds/60)  // minutes nikalne ke liye.
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function updateDisplay(){
     time.textContent = formatTime(elapsed);

}



