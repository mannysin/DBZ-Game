// class Character {
//   constructor(){
//       this.dragonballs = [];
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
    this.dragonballs = [];
    this.score = 0;
    this.x = 100;
    this.y = 400;
    this.width = 45;
    this.height = 85;
    this.imgsrc = 'images/goku2.png'
    this.ctx = document.getElementById('game-board').getContext('2d');

  }


  draw(){
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  }

  move(){
    this.canMove(this.x, this.y)
    
    if(keysBeingPressed.includes("ArrowUp")){
      if(this.canMove(this.x, this.y-10)){
        this.y -= 10;
      } 
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+10)){
      this.y += 10;
      }
    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
      this.x -= 10; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+10, this.y)){
      this.x += 10; 
      }
    }
  }

  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 800 || futureY < 0 || futureY > 480 ){
      result = false;
    } 

    theGame.obstacles.forEach((obstacle)=>{
      // need to calculate the top left, top right, bottom left, and bottom right corner of each object
      if(futureX < obstacle.x+obstacle.width && futureX+this.width > obstacle.x && futureY < obstacle.y+obstacle.height && futureY+this.height > obstacle.y ){
        this.y = obstacle.y + obstacle.height + 5;
        result = false;
      }
    })
    return result;
  }

  dragonballCollison(gokuPosition, dragonballPosition){
    let gokuPosition = this.x += this.y
    let dragonballPosition = theGame.dragonballPosition.x += theGame.dragonballPosition.y
    if (gokuPosition && dragonballPosition == true){
      this.dragonballs.push(theGame.allDragonballs);
      this.score++;
    }
  }


 
}

class Frieza{
  constructor(){
    this.dragonballs = [];
    this.x = 550;
    this.y = 400;
    this.width = 45;
    this.height = 85;
    this.imgsrc = 'images/frieza.png'
    this.ctx = document.getElementById('game-board').getContext('2d');

  }


  draw(){
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = ()=>{
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    }
  }

  // moveTowards(){
  //   while (dragonball)
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

  // canMove(futureX, futureY){
  //   let result = true;
  //   if(futureX < 0 || futureX > 800 || futureY < 0 || futureY > 480 ){
  //     result = false;
  //   } 
 
}


class Dragonball{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random() * 600)
    this.y = Math.floor(Math.random() * 300)
    this.width =  25;
    this.height =  25;
    this.imgsrc = 'images/dragonballstar.png'
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

}

// class Obstacle{
//   constructor(){
//     this.ctx = document.getElementById('game-board').getContext('2d');
//     this.x = Math.floor(Math.random() * 500)
//     this.y = Math.floor(Math.random() * 300)
//     this.width =  45;
//     this.height =  85;
//     this.imgsrc = 'images/friezaarmy.png'
//     this.moveDown();
//   }

//   draw(){
//       let theImage = new Image();
//       theImage.src = this.imgsrc;
//       theImage.onload = ()=>{
//       this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
//     }
//   }

//   moveDown(){
//     setInterval(()=>{
//       // this.y += 5;
//     },1000)
//   }
// }