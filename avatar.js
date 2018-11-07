// class Character {
//   constructor(){
//       this.score = 0;
//       this.x = 0;
//       this.y = 0;
//       this.width = 40;
//       this.height = 60;
      
//       this.ctx = document.getElementById('game-board').getContext('2d');
//       setInterval(()=>{
//       this.move();
//     }, 100)
//   }
// }

class Goku{
  constructor(){
    this.score = 0;
    this.x = 100;
    this.y = 400;
    this.width = 45;
    this.height = 85;
    this.xArray = [];
    this.yArray = [];
    // this.directionArray = [];
    this.theSrc = './images/goku2.png'
    this.ctx = document.getElementById('game-board').getContext('2d');
  }


  draw(){
    let theImage = new Image();
    theImage.src = this.theSrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  }

  move(){
    this.canMove(this.x, this.y)
    
    if(keysBeingPressed.includes("ArrowUp")){
      if(this.canMove(this.x, this.y-10)){
        this.yArray.push(this.y);
        this.xArray.push(this.x);
        this.y -= 10;
      } 
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+10)){
        this.yArray.push(this.y);
        this.xArray.push(this.x);
        this.y += 10;
      }
    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
        this.yArray.push(this.y);
        this.xArray.push(this.x);
        this.x -= 10; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+10, this.y)){
        this.yArray.push(this.y);
        this.xArray.push(this.x);
        this.x += 10; 
      }
    }
  }

  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 760 || futureY < 0 || futureY > 480 ){
      result = false;
    } 

    theGame.obstacles.forEach((obstacle)=>{
      if(futureX < obstacle.x+obstacle.width && futureX+this.width > obstacle.x && futureY < obstacle.y+obstacle.height && futureY+this.height > obstacle.y ){
        this.x = this.x - 5;
        result = false;
      }
    })
    
    return result;
  }
 
}

class Frieza{
  constructor(){
    this.score = 0
    this.x = 550;
    this.y = 400;
    this.width = 45;
    this.height = 85;
    this.moveDirection = "left";
    this.imgsrc = './images/frieza.png'
    this.ctx = document.getElementById('game-board').getContext('2d');

  }


  draw(){
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  }

  moveTowards() {
    // this.checkIfTouched(goku);
    
    let nextPosition = this.canMove(this.x, this.y)
    if (this.canMove(this.x, this.y)) {
      if(this.x > 20 && this.y > 20 && this.moveDirection === "left"){
        console.log(this.x)
        if(this.x < 30) {
          this.moveDirection = 'right';
        }
        this.x -= Math.floor(Math.random() + 15);
        this.y -= Math.floor(Math.random() * 10);
        return nextPosition  
      } else if (this.x < 760 && this.y < 480 && this.moveDirection === "right") {
        if(this.x > 740) {
          this.moveDirection = 'left';
        }
        this.x += Math.floor(Math.random() + 15);
        this.y += Math.floor(Math.random() * 10);
        return nextPosition
      }
        
    } 
    // else if {
    //   this.x = this.x + Math.floor(Math.random() * 10);
    //   this.y = this.y + Math.floor(Math.random() * 15);
    // }
    
    // if (nextPosition) {
    //   this.x = this.x + Math.floor(Math.random() * 10);
    //   this.y = this.y + Math.floor(Math.random() + 15);
    // }
  }
  
  
  // updateAngle() {
  //   this.dx = this.goku.x - this.x;
  //   this.dy = this.goku.y - this.y;
  //   this.distance = Math.sqrt((this.dx*this.dx) + (this.dy*this.dy));
  //   this.angle = Math.atan2(this.dy,this.dx) * 180 / Math.PI;
  // }
  
  // updateSpeed() {
  //   this.speedX = this.speed * (this.dx/this.distance);
  //   this.speedY = this.speed * (this.dy/this.distance);
  // }

  // moveTowards() {
  //   this.canMove(this.x, this.y);
  //   this.updateAngle();
  //   this.updateSpeed();
  //   this.x += this.speedX;
  //   this.y += this.speedY;
  // }

  // moveTowards(whichKey){
  //   this.canMove(this.x, this.y)
    // console.log("this is " + diffX)
    // let diffY = this.goku.y - this.frieza.y;
    // let diffX = this.goku.x;
    //   if (diffX > 0){
    //     this.frieza.x += 3;
    //   } else {
    //     this.frieza.x -=3;
    //   }

    //   if(diffY > 0){
    //     this.frieza.y += 3;
    //   } this.frieza.y -= 3;

    // if (whichKey === "ArrowLeft" || "ArrowRight" || "ArrowUp" || "ArrowDown") {
    // console.log("yo" + whichKey)
    // }
    
    
    
  // }

  // moveTowards(){
  //   this.canMove(this.x, this.y)
    
  //   if(keysBeingPressed.includes("87")){
  //     if(this.canMove(this.x, this.y-10)){
  //       this.y -= 10;
  //     } 
  //   }
  //   if(keysBeingPressed.includes("83")){

  //     if(this.canMove(this.x, this.y+10)){
  //     this.y += 10;
  //     }
  //   }

  //   if(keysBeingPressed.includes("65")){
  //     if(this.canMove(this.x-10, this.y)){
  //     this.x -= 10; 
  //     }
  //   }

  //   if(keysBeingPressed.includes("68")){
  //     if(this.canMove(this.x+10, this.y)){
  //     this.x += 10; 
  //     }
  //   }
  // }

  canMove(futureX, futureY){
    if(futureX < 0 || futureX > 760 || futureY < 0 || futureY > 480 ){
      return false;
    }
    return true;
  }
  
  checkIfTouched(goku) {
    if(this.x < goku.x+goku.width && this.x+this.width > goku.x && this.y < goku.y+goku.height && this.y+this.height > goku.y){
      alert("You have been captured by Lord Frieza...It is a dark day for mankind.");
    }
  } 
 
}


class Dragonball{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random() * 700)
    this.y = Math.floor(Math.random() * 300)
    this.width =  25;
    this.height =  25;
    this.imgsrc = './images/dragonballstar.png'
    this.touched = false;
    this.position = [this.x, this.y];
    this.draw();
  }

  draw(){
    setTimeout(()=>{
      let theImage = new Image();
      theImage.src = this.imgsrc;
      theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
      }
    },3000)
  }

  checkIfTouched(goku) {
    if(this.x < goku.x+goku.width && this.x+this.width > goku.x && this.y < goku.y+goku.height && this.y+this.height > goku.y ){
      this.touched = true;
    }
  } 

}

class Obstacle{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random() * 500)
    this.y = Math.floor(Math.random() * 300)
    this.width =  45;
    this.height =  85;
    this.imgsrc = './images/friezaarmy.png'
  }

  draw(){
    setTimeout(()=>{
      let theImage = new Image();
      theImage.src = this.imgsrc;
      theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
    },1000)
  }

  checkIfTouched(goku) {
    if(this.x < goku.x+goku.width && this.x+this.width > goku.x && this.y < goku.y+goku.height && this.y+this.height > goku.y){
      this.touched = true;
    }
  } 

}