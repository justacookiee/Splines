let x0;
let y0;

let x1 = 300;
let y1 = 400;

// let x2 = 500, y2 = 235;
let x2, y2;

let t = 0.0;

let mem = []

let wait = true;
function setup() {
    createCanvas(windowWidth, windowHeight);
    x0 = windowWidth / 4;
    y0 = windowHeight * 3 / 4;
}
  
function draw() {
    background(120, 193, 243);
    if(!wait) {
        let a = lerpfn(x0, y0, x1, y1, t);
        let b = lerpfn(x1, y1, x2, y2, t);
        let c = lerpfn(a.x, a.y, b.x, b.y, t);
        if(t >= 1) {
            wait = true;
        }else {
            t += 0.01;
            mem.unshift(c);
        }
        // if(mem[0].x <= mouseX + 1 && mem[0].y <= mouseY + 1) {
            //     wait = true;
            // }
    }
    stroke(248, 253, 207);
    noFill();
    beginShape()
    for(let i = 0; i < mem.length; i++) {
        vertex(mem[i].x, mem[i].y);
    }
    endShape();
    noStroke();
    fill(155, 232, 216);
    ellipse(x0, y0, 8);
    ellipse(x1, y1, 8);
    ellipse(x2, y2, 8);
}

function mousePressed() {
    background(120, 193, 243);
    mem = [];
    x2 = mouseX;
    y2 = mouseY;
    t = 0;
    wait = false;
}
function mouseReleased() {
    wait = true;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}