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
    this.theSrc = './images/goku2.png'
    this.ctx = document.getElementById('game-board').getContext('2d');
  } // end of goku constructor


  draw(){
    let theImage = new Image();
    theImage.src = this.theSrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  } // end of drawing on canvas

  move(){
    this.canMove(this.x, this.y)
    
    if(keysBeingPressed.includes("ArrowUp")){
      if(this.canMove(this.x, this.y-10)){
        this.theSrc = './images/gokuup.png';
        this.y -= 10;
      } 
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+10)){
        this.theSrc = './images/gokudown.png';
        this.y += 10;
      }
    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
        this.theSrc = './images/gokuleft.png';
        this.x -= 10; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+10, this.y)){
        this.theSrc = './images/gokuright.png';
        this.x += 10; 
      }
    }
  } // end of goku movements

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
  } // end of future movement checker
 
} // end of goku class

class Frieza{
  constructor(){
    this.score = 0
    this.x = 550;
    this.y = 400;
    this.width = 35;
    this.height = 75;
    this.moveDirection = "left";
    this.imgsrc = './images/frieza.png'
    this.ctx = document.getElementById('game-board').getContext('2d');
  } //end of constructor


  draw(){
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  } //end of frieza drawing

  moveTowards() {
    let nextPosition = this.canMove(this.x, this.y)
    if (this.canMove(this.x, this.y)) {
      if(this.x > 20 && this.y > 20 && this.moveDirection === "left"){
        this.imgsrc = './images/friezamoveleft.png'
        if(this.x < 30) {
          this.imgsrc = './images/friezamoveright.png'
          this.moveDirection = 'right';
        }
        this.x -= Math.floor(Math.random() + 15);
        this.y -= Math.floor(Math.random() * 9);
        return nextPosition  
      } else if (this.x < 760 && this.y < 480 && this.moveDirection === "right") {
        if(this.x > 740 ) {
          this.imgsrc = './images/friezamoveleft.png'
          this.moveDirection = 'left';
        }
        this.x += Math.floor(Math.random() + 15);
        this.y += Math.floor(Math.random() * 5);
        return nextPosition
      }
    }
  } //end of frieza movement
  
  canMove(futureX, futureY){
    if(futureX < 0 || futureX > 760 || futureY < 0 || futureY > 480 ){
      return false;
    }
    return true;
  } //end of frieza future move check
  
  checkIfTouched(goku) {
    if(this.x < goku.x+goku.width && this.x+this.width > goku.x && this.y < goku.y+goku.height && this.y+this.height > goku.y){
      setTimeout(()=>{
        alert("You have been captured by Lord Frieza...It is a dark day for mankind.");
      },200)
    }
  } //end of frieza collusion check
 
} //end of frieza class


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