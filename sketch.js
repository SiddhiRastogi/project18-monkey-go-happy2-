//Global Variables
var bananaImg
var obstacleImg
var foodGrp
var obstacleGrp
var score
var wall,backgroundImg
var monkey,monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10 , monkey_running
var ground

function preload(){
 backgroundImg = loadImage("jungle.jpg");
  
player_running = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png", "Monkey_08.png","Monkey_09.png" , "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
 wall = createSprite(300,150,600,300);
  wall.addImage("jungle",backgroundImg);
  wall.scale = 1.5;
 wall.x = wall.width/2;
   wall.velocityX = -5;
  
  monkey = createSprite(100,250,50,45);
  monkey.addAnimation("running",player_running);
  monkey.scale = 0.10;
  
  foodGrp = new Group();
  obstacleGrp = new Group();
  
  ground = createSprite(300,270,600,10);
  ground.visible = false;

  score = 0;
}
function draw(){
 background(165); 
  
  if(wall.x < 0){
   wall.x = wall.width/2;
  }
  
  if(keyDown(UP_ARROW)){
   monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(foodGrp.isTouching(monkey)){
  score = score + 2;
  foodGrp.destroyEach();
  }
  
  switch(score){
    case 10 : monkey.scale = 0.12;
                 break;
    case 20 : monkey.scale = 0.14;
                 break;
    case 30 : monkey.scale = 0.16;
                 break;
    case 40 : monkey.scale = .18;
                 break;
      default : break;
  
  }
  
  if(obstacleGrp.isTouching(monkey)){
  monkey.scale = 0.10;
  }
  
  drawSprites();
  spawnObstacles();
  spawnFood();
   stroke("white");
  textSize(20);
  fill("black");
  text("score:"+score , 500,50);
 // score = score + Math.round(getFrameRate()/60);
  
}

function spawnFood(){
  if(frameCount%60 === 0){
  banana = createSprite(600,100,20,20);
  banana.addImage(bananaImg);
  banana.scale = 0.1
  banana.velocityX = -4;
  foodGrp.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%90===0){
  obstacle = createSprite(600,260,20,20)
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacleGrp.add(obstacle);
  }
}