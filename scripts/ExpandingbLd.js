let txt = "bLd";
let title = "";
let check = "";
let center = 0;
var canvas;

function preload(){
  raleway = loadFont('/data/fonts/RalewayVariableFont.ttf');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  textFont(raleway);
  background(247);
}


function draw() {

  background(247);
  center = round(dist(mouseX, mouseY, width/2, height/2));
  textAlign(CENTER, CENTER);
  noStroke();
  textStyle(BOLD);
  translate(width/2,height/2);

  fill(25);
  textSize(width/10);
  text(txt, 0, -30);

  push();
    fill(50);
    textSize(width/50);
    text('new site coming soon', 0,100)
  pop();
}

function mouseMoved(){

  let check = center;

  if (check < (width/10)){
   txt = "bLd";
  }

  if (check > (width/10) && check < (width/8)){
   txt = "baLdr";
  }

  if (check > (width/8) && check < (width/6)){
   txt = "baiLdre";
  }

  if (check > (width/6) && check < (width/5)){
   txt = "bailLdrem";
  }

  if (check > (width/5) && check < (width/4)){
   txt = "baileLdreme";
  }
  if (check > (width/4)){
   txt = "baileyLdremel";
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}
