let player;
let walls = [];
let doorWidth = 120;
let doorHeight = 400;
let Floor = []
let Pavement = []
let Road = []
let building_Y = 5
let textures
let GrassTexture
let Windows = []
let sidewalls = []
let bill
let Buildz = 485
let backwallz = 40



function preload() {
    textures=loadImage('Brick.jpg');
    GrassTexture=loadImage("Grass.jpg");
    
    
}

function setup() {
    
    createCanvas(windowWidth, windowHeight, WEBGL);
    createWalls();

    


   
   
    player = {
        x: 0,
        y: -50,
        z: 2000,
        speed: 30,
        angle:0
    
    };

  
}

function draw() {
    background(220);
   
    // Reset the transform
    translate(player.x, -player.y, -player.z); 
    rotateY(player.angle);
    
   
    // Draw the walls
    for (let wall of walls) {
        push();
        translate(wall.x, wall.y, wall.z);
        box(wall.width, wall.height, wall.depth);
        pop();
        texture(textures);
    }
  
    for (let wall of Windows) {
        push();
        translate(wall.x, wall.y, wall.z);
        fill(20);
        box(wall.width, wall.height, wall.depth);
        pop();
        
    }


    for (let wall of Floor) {
        push();
        translate(wall.x, wall.y, wall.z);
        box(wall.width, wall.height, wall.depth);
        pop();
        texture(GrassTexture);
    }

    for (let wall of Pavement) {
        push();
        translate(wall.x, wall.y, wall.z);
        fill("#706E6A");
        box(wall.width, wall.height, wall.depth);
        pop();
    }

    for (let wall of Road) {
        push();
        translate(wall.x, wall.y, wall.z);
        fill(50);
        box(wall.width, wall.height, wall.depth);
        pop();
    }

    for (let wall of sidewalls) {
        push();
        translate(wall.x, wall.y, wall.z);
        fill(70);
        box(wall.width, wall.height, wall.depth);
        pop();
    }


    

    
    handleMovement();
}

function createWalls() {

    //200px = 1 meter = scale

    walls.push({ x:4000, y: 250, z: 2000, width: 8000, height: 5, depth: 4000 }); // Grass stuff
   // Pavement.push({ x: 905, y: 240, z: 420, width: 3200, height: 20, depth: 300 }); // Pavemnt
    Pavement.push({ x: 905, y: 240, z: 620, width: 10000, height: 20, depth: 300 }); // Pavemnt
    Road.push({ x: 905, y: 240, z: 1000, width: 10000, height: 10, depth: 1000 }); // Road
    Road.push({ x: -1200, y: 240, z: -2000, width: 1000, height: 10, depth: 5000 }); // Road

    /* Create the walls of the first room
    walls.push({ x: 0, y: 0.3,  z: -250, width: 500, height: 500, depth: 5 }); // Back wall
    walls.push({ x: 0, y: -5 , z: 250, width: 500, height: 500, depth: 5 }); // Front wall
    walls.push({ x: -250, y: 0.3 , z: 0, width: 5, height: 500, depth: 500 }); // Left wall
    walls.push({ x: 250, y: 0.1 , z: 0, width: 5, height: 500, depth: 500 });  // Right wall
    //walls.push({ x: 500, y: 0.1, z: 200, width: 500, height: 500, depth: 5 });
  

   
    // Create the doorway (between the two rooms)
    walls.push({ x: 0, y: 150, z: 250, width: doorWidth, height: doorHeight, depth: 5 }); // Doorway
    */
   
// x changes by 805 pixels, y no change and z depends on how far back i want

    Floor.push({ x: 400, y: 150,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 400, y: -50 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 400, y: -250,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 400, y: -450 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 400, y: -650,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 400, y: -850 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 400, y: -1050,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 400, y: -1250 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 400, y: -1450,  z: Buildz, width: 800, height: 200, depth:30 }); 

    sidewalls.push({ x: -405, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: -1205, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: -805, y: -550,  z: backwallz, width: 800, height: 2000, depth:30 }); 
    sidewalls.push({ x: -805, y: -1545 ,  z: 265, width: 800, height: 10, depth:-485 });     

    //---------------------------------------------------------------------------
    walls.push({ x: 1200, y: 150,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 1200, y: -50 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 1200, y: -250,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 1200, y: -450 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 1200, y: -650,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 1200, y: -850 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 1200, y: -1050,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 1200, y: -1250 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 1200, y: -1450,  z: Buildz, width: 800, height: 200, depth:30 }); 


    sidewalls.push({ x: 405, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: -405, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: 0, y: -550,  z: backwallz, width: 800, height: 2000, depth:30 }); 
    sidewalls.push({ x: 0, y: -1545 ,  z: 265, width: 800, height: 10, depth:-485 }); 
    
     //---------------------------------------------------------------------------
    walls.push({ x: 2000, y: 150,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 2000, y: -50 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 2000, y: -250,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 2000, y: -450 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 2000, y: -650,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 2000, y: -850 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 2000, y: -1050,  z: Buildz, width: 800, height: 200, depth:30 }); 
    Windows.push({ x: 2000, y: -1250 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
    walls.push({ x: 2000, y: -1450,  z: Buildz, width: 800, height: 200, depth:30 }); 

    sidewalls.push({ x: 1205, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: 405, y: -550 ,  z: 265, width: 10, height: -2000, depth:500 }); 
    sidewalls.push({ x: 805, y: -550,  z: backwallz, width: 800, height: 2000, depth:30 }); 
    sidewalls.push({ x: 805, y: -1545 ,  z: 265, width: 800, height: 10, depth:-485 }); 
//---------------------------------------------------------------------------------
walls.push({ x: 2800, y: 150,  z: Buildz, width: 800, height: 200, depth:30 }); 
Windows.push({ x: 2800, y: -50 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
walls.push({ x: 2800, y: -250,  z: Buildz, width: 800, height: 200, depth:30 }); 
Windows.push({ x: 2800, y: -450 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
walls.push({ x: 2800, y: -650,  z: Buildz, width: 800, height: 200, depth:30 }); 
Windows.push({ x: 2800, y: -850 ,  z: Buildz, width: 800, height: 200, depth:10 }); 
walls.push({ x: 2800, y: -1050,  z: Buildz, width: 800, height: 200, depth:30 }); 



   

    sidewalls.push({ x: 2010, y: -350 ,  z: 265, width: 10, height: -1605, depth:500 }); 
    sidewalls.push({ x: 1600, y: -350,  z: backwallz, width: 800, height: -1605, depth:30 }); 
    sidewalls.push({ x: 1600, y: -1150 ,  z: 265, width: 800, height: 10, depth:-485 }); 

    //-----------------------------------------------------------------------------------

  //  walls.push({x:1700, y: 150 , z:-500, width: 1000, height: 200, depth:500})
  //  Road.push({x:1700, y: 150 , z:-250, width: 150, height: 400, depth:5})

  
    
    


}




function handleMovement() {
    
    

    if (keyIsDown(87)) { // W key

        //let forwardZ = sin(player.angle) * player.speed ;
        let forwardZ = cos(player.angle) * player.speed;
  
  
         // player.x += forwardX;
          player.z -= forwardZ;
  
  
      }
      if (keyIsDown(83)) { // S key
          //let backwardZ = sin(player.angle) * player.speed ;
          let backwardZ = cos(player.angle) * player.speed ;
         // player.x -= backwardX;
          player.z += backwardZ;
      }
      if (keyIsDown(65)) { // A key (turn left)
          player.angle += 1;
      }
      if (keyIsDown(68)) { // D key (turn right)
          player.angle -= 1;
      }

      if (keyIsDown(32)) { // space bar (go up)
        player.y -= 30
    }
   
}
