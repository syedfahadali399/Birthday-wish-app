let getForm = document.getElementById("form-data")
let getUsername = document.getElementById("get-user-name")
let showUserWish = document.getElementById("show-wish")
let clickAudio = document.getElementById("click-audio")
let audio = document.getElementById("play-audio")
let changeIcon = document.getElementById("change-icon")

let createElementDiv = document.createElement("div")
let createElementh2 = document.createElement("h2")
let createElementp = document.createElement("p")

clickAudio.addEventListener("click", function() {

    if(audio.paused) {
        audio.play()
        changeIcon.className = "fa-solid fa-pause text-xl"
    } else {
        audio.pause()
        changeIcon.className = "fa-solid fa-play text-xl"
        
    }
})

function wishUser(username) {

    if(audio.paused) {
        audio.play()
        changeIcon.className = "fa-solid fa-pause text-xl"
    }

    createElementh2.textContent = `Dear Friend, ${username.toUpperCase()}`
    createElementp.textContent = `Wishing you a day filled with joy, laughter, and unforgettable moments! May all your dreams come true! 🎉✨`
    
    createElementDiv.className = "mt-8 animate-fade-in"
    createElementh2.className = "text-3xl text-purple-800 font-semibold"
    createElementp.className = "mt-4 text-gray-700"

    showUserWish.insertAdjacentElement("beforeend", createElementDiv)
    createElementDiv.insertAdjacentElement("beforeend", createElementh2)
    createElementDiv.insertAdjacentElement("beforeend", createElementp)
}

getForm.addEventListener("submit", (e) => {
    e.preventDefault()
 
    let convertData = getUsername.value

    if(!convertData || convertData === "") {
        alert("Please Enter username")
    } else {
        wishUser(convertData)
    }
})