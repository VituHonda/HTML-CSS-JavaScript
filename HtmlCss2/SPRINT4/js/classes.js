class Sprite {
  constructor({ position, imgSrc}) {
    this.position = position;
   
    this.image = new Image();
    this.image.src = imgSrc; 


   
  }
  //criando um método para desenhar o objeto
  draw() {
  
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}



class Fighter {
  constructor({ position, moveRate, imgSrc,gravity }) {
    this.height = 151;
    this.width = 100;
    this.position = position;
    this.moveRate = moveRate;
    this.image = new Image();
    this.image.src = imgSrc;
    this.gravity = gravity;
    this.lastKey;
  }
  //criando um método para desenhar o objeto
  draw() {
   ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();

    this.position.y += this.moveRate.y;
    this.position.x += this.moveRate.x;

    //Definindo o limite que o objeto pode descer na tela
    if(this.position.y + this.height + this.moveRate.y >= canvas.height){
       //O objeto para de se mexer
       this.moveRate.y = 0;
    }else{
       this.moveRate.y += this.gravity;
    }
  }
}
