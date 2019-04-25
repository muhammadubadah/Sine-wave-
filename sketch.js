function setup() {
  createCanvas(400, 400);
}
var angle = 0
var wave = []
function draw() {
  background(220);
  translate(100,180);
  var diameter = 100;
  stroke(0);
  noFill();
  ellipse(0, 0, diameter);
  
  var x=(diameter/2)*cos(angle);
  var y=(diameter/2)*sin(angle);
  stroke(255,0,0);
  fill(255,0,0);
  ellipse(x,y,9);
  stroke(255,0,0);
  line(x,y,0,0);
  wave.unshift(y);
  
  translate(80,0);
  stroke(0,500,0);
  line(x-80,y,0,wave[0]);
  stroke(0,50,100)
  
  beginShape();
  for(let i=0; i < wave.length; i++ ){
    vertex(i, wave[i]);
    noFill();
  }
  endShape();
  
  angle +=0.05
  
}