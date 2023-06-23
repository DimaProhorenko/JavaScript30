window.addEventListener("keydown", (e) => {
    const query = `audio[data-key="${e.keyCode}"]`;
    const audio = document.querySelector(query);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key?.classList.add("playing");
});


const removeTransition = e => {
    e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys?.forEach(key => key.addEventListener("transitionend", removeTransition));