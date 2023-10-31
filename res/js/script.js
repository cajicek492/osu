const start = document.getElementById("start");
const point = document.getElementById("point");
const timeInfo = document.getElementById("timeInfo");

let pointInterval;

start.onclick = () => {
  start.style.display = "none";
  startPointInterval();
};

function movePoint(element, x, y) {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;

  console.log(parseFloat(element.style.width));
}

function startPointInterval() {
  clearInterval(pointInterval);
  setPointClick(point);
  pointInterval = setInterval(() => {
    setSize(point, getRandomNumber(50, 100));
    movePoint(
      point,
      getRandomNumber(0, window.innerWidth - parseFloat(point.style.width)),
      getRandomNumber(0, window.innerHeight - parseFloat(point.style.height))
    );
  }, 1000);
}

function getRandomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

let timeStart = 0;
function setPointClick(element) {
  element.onclick = () => {
    if(timeStart == 0){
        timeStart = performance.now();
    } else{
        let timeEnd = performance.now();
        let result = timeEnd - timeStart;
        timeInfo.innerText = `Time: ${result}ms`
        timeStart =performance.now();
    }
    element.innerText++;
    movePoint(
      point,
      getRandomNumber(
        parseFloat(point.style.width),
        window.innerWidth - parseFloat(point.style.width)
      ),
      getRandomNumber(
        parseFloat(point.style.height),
        window.innerHeight - parseFloat(point.style.height)
      )
    );
  };
}

function setSize(element, size) {
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
}
