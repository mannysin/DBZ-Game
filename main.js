let keysBeingPressed = [];
let theGame;



class Game{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.obstacles = [];
    this.allDragonballs = [];


    setInterval(()=>{
      this.ctx.clearRect(0,0,800,600);

      this.goku.move();

      // this.frieza.moveTowards();

      // this.spawnObstacle();

      this.drawEverything();
    },200)
  }

  // spawnObstacle(){
  //   let rando = Math.floor(Math.random()*50)
  //   if(rando === 5){
  //     this.obstacles.push(new Obstacle())
  //   }
  // }

  drawEverything(){
    this.goku.draw();
    this.frieza.draw();
    this.dragonball.draw();
    // this.obstacles.forEach((obstacle)=>{
    //   obstacle.draw();
    // })
  }
}


document.getElementById("start-button").onclick = function() {
  startGame();
};


function startGame() {
  theGame = new Game();
  theGame.goku = new Goku();
  theGame.frieza = new Frieza();
  theGame.dragonball = new Dragonball();
}

document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  if(commands.includes(e.key)){
    e.preventDefault();
  }
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.push(e.key);
  }
   
}

document.onkeyup = function(e){
  let theIndex = keysBeingPressed.indexOf(e.key)
  console.log(theIndex)
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)
  }
}

