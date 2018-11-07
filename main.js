$('.btn-story').click(()=>{
  $('.story').toggle();
  // $('.main').toggle();
})

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

      this.frieza.moveTowards();
      // this.frieza.checkIfTouched();

      if(this.counter < 7) {
        this.addDragonball();
      };

      this.spawnObstacle();

      this.allDragonballs.forEach((oneBall) => {
        oneBall.checkIfTouched(this.goku)
        // console.log(oneBall.touched)
        if(oneBall.touched){
          this.goku.score += 1;
          this.removeDragonball(this.allDragonballs.indexOf(oneBall))
        }
        if(this.goku.score === 7){
          alert("Congratulations, you saved the Human race!");
        }
      })

      this.obstacles.forEach((oneEnemy) => {
        oneEnemy.checkIfTouched(this.goku)
        // console.log(oneEnemy.touched)
        if(oneEnemy.touched){
          this.removeObstacle(this.obstacles.indexOf(oneEnemy))
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
    this.allDragonballs.splice(position, 1)
  }

  spawnObstacle(){
    let rando = Math.floor(Math.random()*30)
    if(rando === 5){
      this.obstacles.push(new Obstacle())
    }
  }

  removeObstacle(position) {
    this.obstacles.splice(position, 1)
  }

  drawEverything(){
    this.goku.draw();
    this.frieza.draw();
    
    this.allDragonballs.forEach((obstacle)=>{
      obstacle.draw();
    })

    this.obstacles.forEach((obstacle)=>{
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
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)
  }
}

