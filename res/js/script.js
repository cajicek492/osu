const start = document.getElementById("start");
const point = document.getElementById("point");

let pointInterval;

start.onclick = () => {
    start.style.display = "none"
    startPointInterval()
}

function movePoint(element, x, y) {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}

function startPointInterval() {
    clearInterval(pointInterval)
    setPointClick(point);
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(50, 100))
        movePoint(point, getRandomNumber(100, 600), getRandomNumber(100, 600));
    },700)
}

function getRandomNumber(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function setPointClick(element){
    element.onclick = () => {
        element.innerText++;
    }
}

function setSize(element, size){
    element.style.width = `${size}px`
    element.style.height = `${size}px`
}