img = "";
status = "";
object = "";
function preload() {
  img = loadImage("street.png")
}
function setup() {
  canvas = createCanvas(600, 500)
  canvas.center()
  
  objectDetector = ml5.objectDetector("cocossd", modelLoaded)
  document.getElementById("status").innerHTML = "object detected"
}
function modelLoaded() {
  console.log("model is loaded")
  status = true;
  objectDetector.detect(img, gotResults)
}
function gotResults(error, results) {
  if (error) {
    console.log(error)
  }
  else {
    console.log(results)
    object = results
  }
}
function draw() {
  image(img, 0, 0, 600, 500)
}