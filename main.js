let keysBeingPressed = [];
let theGame;



class Game{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.obstacles = [];
    this.counter = 0
    this.allDragonballs = [];

   

    setInterval(()=>{
      this.ctx.clearRect(0,0,800,600);

      this.goku.move();

      if(this.counter < 7) {
        this.addDragonball();
      }
      // this.frieza.moveTowards();

      // this.spawnObstacle();
      this.allDragonballs.forEach((oneBall) => {
        oneBall.checkIfTouched(this.goku)
        console.log(oneBall.touched)
        if(oneBall.touched){
          this.goku.score += 1;
          this.removeDragonball(this.allDragonballs.indexOf(oneBall))
        }
        if(this.goku.score === 7){
          alert("Congratulations, you saved the Human race!");
        }
      })

      this.drawEverything();
    }, 200)
  }

  addDragonball(){
    this.allDragonballs.push(new Dragonball()); 
    this.counter += 1
  }

  removeDragonball(position) {
    console.log("----------------", this.allDragonballs)
    console.log("================", this.allDragonballs.indexOf(position))
    this.allDragonballs.splice(position, 1)
  }

  // spawnObstacle(){
  //   let rando = Math.floor(Math.random()*30)
  //   if(rando === 5){
  //     this.obstacles.push(new Obstacle())
  //   }
    // if(rando === 10 || rando === 1 || rando === 3){
    //   this.obstacles.splice(1, 0)
    // }
  // }

  drawEverything(){
    this.goku.draw();
    this.frieza.draw();
    // console.log("the dragonball info >>>>>>>>>>>", this.dragonball)
    // this.dragonball.draw();
    
    this.allDragonballs.forEach((obstacle)=>{
      obstacle.draw();
    })
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

