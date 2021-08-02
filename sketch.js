var bg,bgImg1,bgImg2,bgImg3;
var heading,headingImg;
var backButton,backButtonImg;
var startButton,startButtonImg;
var nextButton2,nextButton2Img;
var homeButton,homeButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";
var eye,eye1;

//exercise
var circle,ball,pendulum;
var circleImg,ballImg,pendulumImg;

eye2


function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  bgImg3=loadImage("bg3.png");

  //eyelogo
  eye1=loadImage("eye.PNG");
 

  //heading
  headingImg=loadImage("heading.png");

  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");
//exercise
  circleImg=loadImage("circle.png");
  ballImg=loadImage("ball.png");
  pendulumImg=loadImage("pendulum.png");

//buttons
  backButtonImg=loadImage("backButton.png");
  startButtonImg=loadImage("nextButton.png");
  nextButton2Img=loadImage("next2.png");
  homeButtonImg=loadImage("homebutton.png");
}







function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  

  heading=createSprite(650,50)
  heading.addImage("heading",headingImg);
  heading.visible=false;

  eye=createSprite(700,150);
  eye.addImage("heading eye",eye1);
  eye.scale=0.5;
  eye.visible=false;

  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.1;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  //buttons
  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;

  
  startButton=createSprite(1100,120,100,100);
  startButton.addImage(startButtonImg);
  startButton.visible=false;
  startButton.scale=0.4;
 
  nextButton2=createSprite(1100,130,100,100);
  nextButton2.addImage( nextButton2Img);
  nextButton2.visible=false;
  nextButton2.scale=0.6;

  homeButton=createSprite(80,300,100,100);
  homeButton.addImage(homeButtonImg);
  homeButton.visible=false;
  homeButton.scale=0.4;


  //exercise1
  circle=createSprite(600,286);
  circle.addImage(circleImg);
  circle.scale=1.4;
  circle.visible=false;

  ball=createSprite(530,70);
  ball.addImage(ballImg);
  ball.scale=0.7;
  ball.visible=false;
  ball.rotation = 180;
  ball.rotateToDirection=true;
  ball.velocityX = 4;

  //exercise2
  pendulum=createSprite(600,400,10,19);
  pendulum.addImage(pendulumImg);
  pendulum.scale=0.3;
  pendulum.visible=false;
}





function draw() {
  background(0);  
  drawSprites();
  if(gameState==="start"){
    start();
   
  }
  else if(gameState==="ex1"){
    exercise1();
  }
  else if(gameState==="ex2"){
    exercise2();
  }
  else if(gameState==="ex3"){
    exercise3();
  }
  else if(gameState==="information"){
    information();
  }
}







function start(){

  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

console.log(heading.x);

  heading.velocityX=3;
  heading.visible=true;
  if(heading.position.x>1000){
    heading.x=0
  }

  eye.visible=true;
  eye.velocityX=3;
  if(eye.position.x>1000){
    eye.x=heading.x+50;
    
  }



  backButton.visible=false;
  circle.visible=false;
  ball.visible=false;
  startButton.visible=false;
  pendulum.visible=false;
  nextButton2.visible=false;
  homeButton.visible=false;

  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);

  
 
  textSize(25);
  fill("black");
  textFont("Georgia");
  text("VISION CHECK",100,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("COLOUR VISION",450,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("EYE  MUSCLES",800,520);
  text("EXERCISE",825,550);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("INSTRUCTIONS",1080,520);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

  if(mousePressedOver(exerciseButton)){
    gameState="ex1";
    
  }
  else if(mousePressedOver(infoButton)){
    gameState="information";
  }
}





function exercise1(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  nextButton2.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;

  backButton.visible=true;

  pendulum.visible=false;
  //exercise

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);


  circle.visible=true;
  ball.visible=true;


  if(mousePressedOver(backButton)){
    gameState="start";
  }

    startButton.visible=true;
    ball.rotation=ball.rotation+1;

    if(mousePressedOver(startButton)){
      gameState="ex2";
    }
}





function exercise2(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  startButton.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;

  backButton.visible=true;
  nextButton2.visible=true;

  //exercise
  circle.visible=false;
  ball.visible=false;
 
  pendulum.visible=true;

  strokeWeight(4);
  line(600,0,pendulum.position.x,pendulum.position.y);

  if(mousePressedOver(backButton)){
    gameState="start";
  }
 /* if(mousePressedOver(nextButton2)){
    gameState="ex3";
  }*/
  
}


function information(){
 
 visionButton.visible=false;
 colorButton.visible=false;
 exerciseButton.visible=false;
 infoButton.visible=false;


  bg.addImage("bg3",bgImg3);
  bg.changeImage("bg3",bgImg3);
  bg.scale=12;

 homeButton.visible=true;
 

 heading.velocityX=3;
  heading.visible=true;
  if(heading.position.x>1000){
    heading.x=0
  }

  eye.visible=true;
  eye.velocityX=3;
  if(eye.position.x>1000){
    eye.x=heading.x+50;
    
  }
 if(mousePressedOver(homeButton)){
  gameState="start";
}


  //instructions about buttons
 
}



