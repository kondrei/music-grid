console.log("Hello")

const canvasElement = document.getElementById('canvas');
console.log(canvasElement);
const canvasCtx = canvasElement.getContext('2d');

canvasCtx.fillRect(10, 10, 100, 100);
// canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
