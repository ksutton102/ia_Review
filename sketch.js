var x = 0;
var y = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
     background(247, 111, 0);
    
    noStroke();
    fill(244, 65, 65);
    ellipse(mouseX, mouseY, 100, 100);
    
    fill(247, 8, 0);
    noStroke();
    x = 200;
    y ++;
    rect(x, y, 100, height);
    
    stroke(158, 0, 113);
    line(100, 50, 500, 50);
    
    if(mouseIsPressed){
        background(158, 0, 113);
        
        fill(169, 9, 249);
        noStroke();
        x = 200;
        y ++;
        rect(x, y, 100, height);
        
        stroke(60, 0, 183);
        line(100, 50, 500, 50);
        
        noStroke();
        fill(0, 183, 183);
        ellipse(mouseX, mouseY, 100, 100);
    }
    
    if(y > height){
        y = 0 - height;
    }
}