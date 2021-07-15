const video = document.querySelector("#video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const backward = document.querySelector("#backward")
const forward = document.querySelector("#forward")
const rango = document.querySelectorAll("#rango")
const progress = document.querySelector("#progress")
play.addEventListener("click" , handlepaly)
pause.addEventListener("click",handlepause)
backward.addEventListener("click",hanlebackward)
forward.addEventListener("click", hanleforward)
function hanlebackward() {

    video.currentTime =     video.currentTime - 10

    console.log("retroceder 10seg")
   
}
function hanleforward() {
    video.currentTime =video.currentTime + 10



console.log("para adelante", video.currentTime
)
}

function handlepaly()  {
    play.hidden = true
    pause.hidden = false
    video.play()
    console.log("bien")
}
function handlepause()  {
    pause.hidden = true
    play.hidden = false
    video.pause()
    console.log("pausado")
}


video.addEventListener("loadedmetadata",handlemetadata)
video.addEventListener("timeupdate",hanledtimeupdate)
progress.addEventListener("input",inputhanletime)


function handlemetadata()
{
    progress.max = video.durationx
    console.log("ha cargado", video.duration)
}

function hanledtimeupdate()
{
    progress.value = video.currentTime
    
}

function inputhanletime()
{
    video.currentTime = progress.value
    console.log(progress.value)
}