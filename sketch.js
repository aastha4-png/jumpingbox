

var rect1,rect2,rect3,rect4;
var music;
var ball;
var edges;

function preload(){
   music = loadSound("music.mp3");
}


function setup(){
     createCanvas(800,600);

    //create 4 different surfaces
rect1  = createSprite(0,580,360,30);
rect1.shapeColor = "green";


rect2  = createSprite(295,580,200,30);
rect2.shapeColor = "blue";


rect3  = createSprite(515,580,200,30);
rect3.shapeColor = "red";


rect4  = createSprite(740,580,220,30);
rect4.shapeColor = "pink";

ball  = createSprite(random(20,750),100,40,40);
ball.shapeColor = rgb(255,255,255);
ball.velocityX = 4;
ball.velocityY = 9;


    

}

function draw() {
    background(0,0,0);
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);

if(rect1.isTouching(ball) && ball.bounceOff(rect1)){
ball.shapeColor = "green";
music.play();
}

if(rect2.isTouching(ball)){
ball.shapeColor = "blue";
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();
}
    if(rect3.isTouching(ball) && ball.bounceOff(rect3)){
ball.shapeColor = "red";
music.play();
}

if(rect4.isTouching(ball) && ball.bounceOff(rect4)){
ball.shapeColor = "pink";
music.play();
}

drawSprites();
}
