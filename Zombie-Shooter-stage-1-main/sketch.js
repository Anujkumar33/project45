var bg,bgImg;
var player, shooterImg, shooter_shooting; 
var zombieImg,zombieGroup;
var GameState = "fight"
var bullets =70;
var bulletsGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg =loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300);

   //Creating Group for Zombies And Bullets 
   zombieGroup=new Group();
   bulletsGroup=new Group();

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 bullet = createSprite(displayWidth-1150,player.y-30,20,10);
 bullet.velocityX=20;
 bulletsGroup.add(bullet);
 player.depth=bullet.depth;
 player.depth= player.depth+2; 
  player.addImage(shooter_shooting);
  bullets=bullets-1;
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


enemy();
drawSprites();

}
  

//creating function to Spawn Zombie
function enemy(){
  if(frameCount %50===0){
    
    //giving random XandY position for ZomBie to Appear
    zombie=createSprite(random(500,1100),random(100,500),40,40)
    zombie.addImage("enemy1", zombieImg);
    zombie.scale=0.15;
    zombie.velocityX=-3;
    zombie.debug=true;
    zombie.setCollider("rectangle",0,0,400,400);
    zombie.lifetime =400;
    zombieGroup.add(zombie);
  }
}
