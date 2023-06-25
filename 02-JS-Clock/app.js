
const hoursHandle = document.querySelector("#hours_handle");
const minutesHandle = document.querySelector("#minutes_handle");
const secondsHandle = document.querySelector("#seconds_handle");
const clock = document.querySelector(".clock");


const getDegree = (value) => {
    return (value / 60) * 360;
}

const updateHandles = (...degrees) => {
    updateHandle(hoursHandle, degrees[0]);
    updateHandle(minutesHandle, degrees[1]);
    updateHandle(secondsHandle, degrees[2]);
}

const updateHandle = (handle, degree) => {
    handle.style.transform = `rotate(${degree}deg)`;
}

const updateClock = () => {
    const date = new Date();
    const hoursDegree = getDegree(date.getHours());
    const minutesDegree = getDegree(date.getMinutes());
    const secondsDegree = getDegree(date.getSeconds());
    updateHandles(hoursDegree, minutesDegree, secondsDegree);
}

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
    clock.classList.remove("hidden");
})