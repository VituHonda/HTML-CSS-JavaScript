//Teclas
// const LEFT = 37;
// const UP = 38;
// const RIGHT = 39;
// const DOWN = 40;

// const A = 65;
// const W = 87;
// const D = 68;
// const S = 83;
const barPlayerOne = document.querySelector('.playerone');
const barPlayerTwo = document.querySelector(".playertwo");
const valueP1 = document.querySelector('#value-p1');
const valueP2 = document.querySelector("#value-p2");
const container = document.querySelector('.container');

let lifePlayerOne = 200; 
let lifePlayerTwo = 200; 

let atkPlayerOne = 0; 
let atkPlayerTwo = 0;

let damage;
let h1;




const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');

//Definindo os limites da tela
canvas.width = 1024;
canvas.height = 576;  

//Definindo o fundo
// os primeios params são as coord x;y os outros dois são LarguraxAlura
ctx.fillRect(0, 0, canvas.width, canvas.height); 

//Garante que o objeto parará quando encostar no limite do canvas
let gravity = 2;

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: "./images/bg_robot_arena.png",
});

const playerOne = new Fighter({
  position: { x: 20, y: 250 },
  moveRate: { x: 0, y: 0 },
  imgSrc: "./images/player-one.png",
 
}); 


playerOne.draw(); 

const playerTwo = new Fighter({
  position: { x: 900, y: 250 },
  moveRate: { x: 0, y: 0 },
  imgSrc: "./images/player-two.png",
  
});
playerTwo.draw(); 

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  j: {
    pressed: false,
  },
  l: {
    pressed: false,
  }
};

let lastKey;
let contador = 0;

function animate(){
  //verificar taxa de atualização deste método
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  playerOne.update();
  playerTwo.update();

  //Player One movement
  
  playerOne.moveRate.x = 0;
  playerOne.moveRate.y = 0; 

  if(keys.a.pressed && playerOne.lastKey === 'a'){
   playerOne.moveRate.x = -6;
  }else if(keys.d.pressed && playerOne.lastKey === 'd'){
   playerOne.moveRate.x = 5;
  }

  //Player Two movement 
  playerTwo.moveRate.x = 0;
  playerTwo.moveRate.y = 0;

  if (keys.j.pressed && playerTwo.lastKey === "j") {
    playerTwo.moveRate.x = -5;
  } else if (keys.l.pressed && playerTwo.lastKey === "l") {
    playerTwo.moveRate.x = 5;
  }

  //collision 
 
   if (
     playerOne.position.x >= playerTwo.position.x - 50 &&
     playerOne.position.y >= playerTwo.position.y - 150
   ) {
     if (contador < 4) {
       //console.log('bateu');
       atkPlayerOne = Math.floor(Math.random() * 21);
       atkPlayerTwo = Math.floor(Math.random() * 21);

       barPlayerOne.style.width = `${(lifePlayerOne -= atkPlayerOne)}px`;
       valueP1.textContent = `${(lifePlayerOne -= atkPlayerOne)}`;

       barPlayerTwo.style.width = `${(lifePlayerTwo -= atkPlayerTwo)}px`;
       valueP2.textContent = `${(lifePlayerTwo -= atkPlayerTwo)}`;

       playerOne.moveRate.x = -200;
       playerTwo.moveRate.x = 200;

       

       
       contador++;
     }else{
       playerOne.position.x = 20;
       playerTwo.position.x = 900;

      if (lifePlayerOne > lifePlayerTwo) {
        alert("PlayerOne venceu");
        h1 = document.createElement("h1").textContent = "PlayerOne venceu";
        console.log(h1);
        //container.appendChild(h1);
        document.location.reload('true');
      } else {
        alert("PlayerTwo venceu!");
        h1 = document.createElement("h1").textContent = "PlayerTwo venceu";
        document.location.reload('true');

        //container.appendChild(h1);
      }
  
  
   
     }
     
 }

 //Definindo limites da 
  if (
    playerOne.position.y + playerOne.height + playerOne.moveRate.y >=
    (canvas.height - 50)
  ) {
    //O objeto para de se mexer
    playerOne.moveRate.y = 0;
  } else {
    playerOne.moveRate.y += gravity;
  }

  if (
    playerTwo.position.y + playerTwo.height + playerTwo.moveRate.y >=
    canvas.height - 50
  ) {
    //O objeto para de se mexer
    playerTwo.moveRate.y = 0;
  } else {
    playerTwo.moveRate.y += gravity;
  }

  playerOne.position.x = Math.max(0, Math.min(canvas.width - playerOne.width, playerOne.position.x));
  playerOne.position.y = Math.max(0, Math.min(canvas.height - playerOne.height, playerOne.position.y));
  
  playerTwo.position.x = Math.max(0, Math.min(canvas.width - playerTwo.width, playerTwo.position.x));
  playerTwo.position.y = Math.max(0, Math.min(canvas.height - playerTwo.height, playerTwo.position.y));
}

//Essta função esta sendo chamada constantemente no game
animate();




//Direcionais 
window.addEventListener('keydown', (e)=>{
   
   //Player One
   switch(e.key){
      case 'w':
         playerOne.moveRate.y = -10;
         break;
      case 'd':
         keys.d.pressed = true;
         playerOne.lastKey = 'd';
         break;
      case 's':
         playerOne.moveRate.y = 1;
         break;
      case 'a':
         keys.a.pressed = true;
         playerOne.lastKey = 'a';
         break;

   }
   //Player Two
   switch (e.key) {
     case "i":
       playerTwo.moveRate.y = -10;
       break;
     case "l":
       keys.l.pressed = true;
       playerTwo.lastKey = "l";
       break;
     case "k":
       playerTwo.moveRate.y = 10;
       break;
     case "j":
       keys.j.pressed = true;
       playerTwo.lastKey = "j";
       break;
   }

   

});

window.addEventListener('keyup', (e)=>{
  switch (e.key) {
    case "w":
      playerOne.moveRate.y = 0;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "s":
      playerOne.moveRate.y = 20;
      break;
    case "a":
      keys.a.pressed = false;
      break;
  }

  //Player Two
  switch (e.key) {
    case "i":
      playerTwo.moveRate.y = -10;
      break;
    case "l":
      keys.l.pressed = false;
      playerTwo.lastKey = "l";
      break;
    case "k":
      playerTwo.moveRate.y = 1;
      break;
    case "j":
      keys.j.pressed = false;
      playerTwo.lastKey = "j";
      break;
  }
})


