  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
      setTimeout(() =>   typeWriter(maquinaDeEscrever),3500);
    });
  }
  const maquinaDeEscrever = document.querySelector('.subtitulo');
  typeWriter(maquinaDeEscrever)

  //jOGO DA COBRINHA

window.onload = function(){
      
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 80);

  const velocidade = 1;

  var vx = vy = 0;
  var px =10;
  var py = 15;
  var tamanhoPixel = 25;
  var quantidadePecas = 10;
  var ax=ay=5;

  var trail = [];
  tail = 5;

  function game(){
    px += vx;
    py += vy;
    if (px <0) {
        px = quantidadePecas-1;
    }
    if (px > quantidadePecas-1) {
        px = 0;
    }
    if (py < 0) {
        py = quantidadePecas-1;
    }
    if (py > quantidadePecas-1) {
        py = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*tamanhoPixel, ay*tamanhoPixel, tamanhoPixel,tamanhoPixel);

    ctx.fillStyle = "green";
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x*tamanhoPixel, trail[i].y*tamanhoPixel, tamanhoPixel-1,tamanhoPixel-1);
      if (trail[i].x == px && trail[i].y == py)
      {
        vx = vy=0;
        tail =5;
      }
    }

    trail.push({x:px,y:py })
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax==px && ay==py){
      tail++;
      ax = Math.floor(Math.random()*quantidadePecas);
      ay = Math.floor(Math.random()*quantidadePecas);
    }

  }

  function keyPush(event){

    switch (event.keyCode) {
      case 65: // Left A
        vx = -velocidade;
        vy = 0;
        break;
      case 87: // up W
        vx = 0;
        vy = -velocidade;
        break;
      case 68: // right D
        vx = velocidade;
        vy = 0;
        break;
      case 83: // down S
        vx = 0;
        vy = velocidade;
        break;         
      default:
          
      break;
    }
  }
}