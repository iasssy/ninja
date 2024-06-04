const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let img = document.getElementById("picture");

img.onload = function() {
  // Ensure the game doesn't start until the image is fully loaded
  document.getElementById("runButton").disabled = false;
};

let x = canvas.width / 2;
let y = canvas.height - 30;


let dx = 2;
let dy = -2;


let xImg = 20;
let yImg = -20;


let dxImg = 2;
let dyImg = -2;

function drawImg() {
    ctx.drawImage(img, xImg, yImg, 100, 100);
    if ((xImg + dxImg > canvas.width - 100) || (xImg + dxImg < 0)) {
        dxImg = -dxImg;
    }
    if ((yImg + dyImg > canvas.height- 100) || (yImg + 100 < 0)) {
        dyImg = -dyImg;
    }
    xImg +=dxImg;
    yImg +=dyImg;
}    
const ballRadius = 10;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawImg();
    collisionDetection();

   
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}
function collisionDetection() {
  // Check collision with the image
  if (
      x + ballRadius > xImg &&
      x - ballRadius < xImg + 100 &&
      y + ballRadius > yImg &&
      y - ballRadius < yImg + 100
  ) {
      dy = -dy;
  }
}


function startGame() {
    const interval = setInterval(draw, 10);
  }
  
document.getElementById("runButton").addEventListener("click", function () {
    startGame();
    this.disabled = true;
  });
//setInterval(draw, 10);
  