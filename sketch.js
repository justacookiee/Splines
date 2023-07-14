let x0;
let y0;

let x1 = 300;
let y1 = 400;

// let x2 = 500, y2 = 235;
let x2, y2;

let t = 0.0;

let mem = []
let button, button1;

let wait = true;

let mode = 0;
let ignore = 1;

function preload() {
    alba = loadFont('alba/alba.TTF');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x0 = windowWidth / 4;
    y0 = windowHeight * 3 / 4;
    textFont(alba);
    button = createButton("Pos1");
    button1 = createButton("Pos2");
    button.style("background-color", "rgb(120, 193, 243)");
    button.style("color", "rgb(155, 232, 216)");
    button.style("font-size", "1.4rem");
    button.style("border-radius", "25%");
    button1.style("background-color", "rgb(120, 193, 243)");
    button1.style("color", "rgb(155, 232, 216)");
    button1.style("font-size", "1.4rem");
    button1.style("border-radius", "25%");
}

function changePoint() {
    mode = 1;
}
function changePoint1() {
    mode = 2;
}

function draw() {
    background(120, 193, 243);
    button.position(width - 350, 130);
    button.mousePressed(changePoint);
    button1.position(width - 150, 130);
    button1.mousePressed(changePoint1);
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
    fill(255,0,0);
    ellipse(x1, y1, 8);
    fill(155, 232, 216);
    ellipse(x2, y2, 8);
    textSize(50);
    text('Splines', width - 300, 75);
}

function mousePressed() {
    if(mode === 1) {
        if(ignore === 1) {
            ignore = 0;
        }else {
            x0 = mouseX;
            y0 = mouseY;
            mode = 0;
            ignore = 1;
        }
    }else if(mode === 0) {
        background(120, 193, 243);
        mem = [];
        x2 = mouseX;
        y2 = mouseY;
        t = 0;
        wait = false;
    }else if(mode === 2) {
        if(ignore === 1) {
            ignore = 0;
        }else {
            x1 = mouseX;
            y1 = mouseY;
            mode = 0;
            ignore = 1;
        }
    }
}
function mouseReleased() {
    wait = true;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}