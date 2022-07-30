const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
var pontuacao = 0;
var ponto = 0;

const jump = () => {
    const marioBottom = +window.getComputedStyle(mario).bottom.replace('px','');
    if(marioBottom == 0) {
      mario.classList.add('jump');
        setTimeout(() => {
          mario.classList.remove('jump');
        },500)
      var jumpsound = new Audio('./sound/jump.mp3');
      console.log(jumpsound = new Audio('./sound/jump.mp3'));
      jumpsound.addEventListener('canplaythrough', function() {
      jumpsound.play();
    });
  }
}

    
var themesound = 1;
const music = () => {
    if(themesound == 1){
      themesound = new Audio('./sound/theme.mp3');
      themesound.addEventListener('canplaythrough', function() {
        themesound.play();
     })
  }
}

const loop = setInterval(() =>{

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  if (pipePosition <= 130 && marioPosition < 110 && pipePosition > 0) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    gameover.src = './images/game-over-title.png'
    gameover.style.width = '500px'
    gameover.style.display = 'block'
    gameover.style.margin = '0 auto'
    gameover.style.opacity = '0'


    clearInterval(loop);
    gameover.classList.add('gameovertitle');
    mario.classList.add('gameover');
    setTimeout(() => {
      mario.style.bottom = '-120px'
    },2000)
    var gameoversound = new Audio('./sound/gameover.mp3');
    gameoversound.addEventListener('canplaythrough', function() {
      themesound.pause();
      gameoversound.play();
    });
  }

  ponto++;
  if (ponto == 5) {
    ponto = 0;
    pontuacao++;
  }
  
  document.getElementById("pontuacao").value=pontuacao;

},10)

document.addEventListener('keydown', jump)
document.addEventListener('keydown', music)