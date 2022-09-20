function preload(){
    playerImage = loadAnimation("tile001.png","tile002.png","tile003.png","tile004.png","tile005.png",
    "tile006.png","tile007.png","tile008.png","tile009.png")
      bgImage = 
        loadImage("bg.png")

    obstacleImage = 
      loadImage("imag.png")
    }
    
    
    function setup() {
        createCanvas(500,200)
      bg = createSprite(200,120)
      bg.addImage(bgImage)
      player = createSprite(50,150)
    player.addAnimation("runner",playerImage)
      player.scale= 0.2
      invisibleGround = createSprite(200,190,400,10);
      invisibleGround.visible = false;
    }
    
    trex.collide(invisibleGround);

  function draw() {
  background("black")
   bg.velocityX = -3
   if(bg.x<100){
   bg.velocityX = 300
    }

    var obstacle
    obstacle = loadImage(obstacleImage)

    runner.collide()
    runner.dissapear

  if(keyDown("space") && runner.y >= 159) {
       runner.velocityY = -12;}
        
      drawSprites()
    }