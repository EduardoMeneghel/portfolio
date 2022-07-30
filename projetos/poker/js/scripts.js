let carta;
let color;
let naipe;
let naipeNumero;
let vezDoJogador = 1;
let contadorcarta = 0;
let contador = 0;
let numeroDeJogadores = 2;
let cartasMesa = [];
let cartasMaoJogador = [];
let cartasMaoAdiversario1 = [];
let cartasMaoAdiversario2 = [];
let contadorJogador = 1;

let todasCartas = [];
let verificacaoNipe = [];
let verificacaoNumero = [];
let naipeCartas = [];
let numeroCartas = [];
const count = {};

// Pegando a mão do jogador mesa e adiversario
const primeiraMao = document.getElementById('primeiramao');
const segundaMao = document.getElementById('segundamao');
const primeiraMaoAdiversario1 = document.getElementById('primeiramaoadiversario1');
const segundaMaoAdiversario1 = document.getElementById('segundamaoadiversario1');
const primeiraMaoAdiversario2 = document.getElementById('primeiramaoadiversario2');
const segundaMaoAdiversario2 = document.getElementById('segundamaoadiversario2');
const mesa1 = document.getElementById('primeira');
const mesa2 = document.getElementById('segunda');
const mesa3 = document.getElementById('terceira');
const mesa4 = document.getElementById('quarta');
const mesa5 = document.getElementById('quinta');

function pegarCarta() {

  do {
    naipe = Math.floor(Math.random() * 4)+1;
    naipeNumero = Math.floor(Math.random() * 13)+1;

    if(naipeNumero == 1) {
      naipeNumero = 'A';
    }

    if(naipeNumero == 11) {
      naipeNumero = 'J';
    }

    if(naipeNumero == 12) { 
      naipeNumero = 'Q';
    }

    if(naipeNumero == 13) {
      naipeNumero = 'K';
    }


    switch (naipe) {
      case 1:
      carta = 'bi-suit-diamond-fill';
      color = 'text-danger';
      break;
      case 2:
      carta = 'bi-suit-heart-fill';
      color = 'text-danger';
      break;
      case 3:
      carta = 'bi-suit-club-fill';
      color = 'text-black';
      break;
      case 4:
      carta = 'bi-suit-spade-fill';
      color = 'text-black';
      break;
    }
  } while(cartasMesa.indexOf(naipe+""+""+naipeNumero) > -1)

  cartasMesa[contadorcarta] = naipe+""+""+naipeNumero;
  contadorcarta++;
}


function proximaJogada(){


  if(contador != 0 && contador <= 5) {

    pegarCarta()

    switch (contador) {
      case 1:
        mesa1.classList.add(carta);
        mesa1.classList.add(color);
        mesa1.classList.add("carta");
        mesa1.innerHTML = naipeNumero;
      break;
      case 2:
        mesa2.classList.add(carta);
        mesa2.classList.add(color);
        mesa2.classList.add("carta");
        mesa2.innerHTML = naipeNumero;
      break;
      case 3:
        mesa3.classList.add(carta);
        mesa3.classList.add(color);
        mesa3.classList.add("carta");
        mesa3.innerHTML = naipeNumero;
      break;
      case 4:
        mesa4.classList.add(carta);
        mesa4.classList.add(color);
        mesa4.classList.add("carta");
        mesa4.innerHTML = naipeNumero;
      break;
      case 5:
        mesa5.classList.add(carta);
        mesa5.classList.add(color);
        mesa5.classList.add("carta");
        mesa5.innerHTML = naipeNumero;
      break;
    }

    if (contador == 8+numeroDeJogadores*2) {
    
      todasCartas = cartasMesa.concat(cartasMaoJogador);
      for (let i = 0; i < todasCartas.length; i++){
        if (todasCartas[i]) {

          naipeCartas = todasCartas[i].substr(0, 1);
          numeroCartas = todasCartas[i].substr( 1)
          
        }
        console.log(naipeCartas , numeroCartas);
      }
    }
    contador++;
  }

  if(contador <= 5) {

    if(contador == 0) {

      do {

        pegarCarta()
    
        switch (vezDoJogador) {
          case 1:
            contadorJogador = 1;
            primeiraMao.classList.add(carta);
            primeiraMao.classList.add(color);
            primeiraMao.classList.add("carta");
            primeiraMao.innerHTML = naipeNumero;
            cartasMaoJogador[contadorJogador] = naipe+""+""+naipeNumero;
          break;
      
          case 2:
            contadorJogador = 2;
            segundaMao.classList.add(carta);
            segundaMao.classList.add(color);
            segundaMao.classList.add("carta");
            segundaMao.innerHTML = naipeNumero;
            cartasMaoJogador[contadorJogador] = naipe+""+""+naipeNumero;
          break;
          case 3:
            contadorJogador = 1;
            primeiraMaoAdiversario1.classList.add(carta);
            primeiraMaoAdiversario1.classList.add(color);
            primeiraMaoAdiversario1.classList.add("carta");
            primeiraMaoAdiversario1.classList.add("opacity-25");
            primeiraMaoAdiversario1.innerHTML = naipeNumero;
            cartasMaoAdiversario1[contadorJogador] = naipe+""+""+naipeNumero;
          break;
      
          case 4:
            contadorJogador = 2;
            segundaMaoAdiversario1.classList.add(carta);
            segundaMaoAdiversario1.classList.add(color);
            segundaMaoAdiversario1.classList.add("carta");
            segundaMaoAdiversario1.classList.add("opacity-25");
            segundaMaoAdiversario1.innerHTML = naipeNumero;
            cartasMaoAdiversario1[contadorJogador] = naipe+""+""+naipeNumero;
          break;
          
          case 5:
            contadorJogador = 1;
            primeiraMaoAdiversario2.classList.add(carta);
            primeiraMaoAdiversario2.classList.add(color);
            primeiraMaoAdiversario2.classList.add("carta");
            primeiraMaoAdiversario2.classList.add("opacity-25");
            primeiraMaoAdiversario2.innerHTML = naipeNumero;
            cartasMaoAdiversario2[contadorJogador] = naipe+""+""+naipeNumero;
          break;
      
          case 6:
            contadorJogador = 2;
            segundaMaoAdiversario2.classList.add(carta);
            segundaMaoAdiversario2.classList.add(color);
            segundaMaoAdiversario2.classList.add("carta");
            segundaMaoAdiversario2.classList.add("opacity-25");
            segundaMaoAdiversario2.innerHTML = naipeNumero;
            cartasMaoAdiversario2[contadorJogador] = naipe+""+""+naipeNumero;
          break;
        }
        vezDoJogador++;
      } while (vezDoJogador <=6)
      contador++;
    }
  }
  if(contador <= 6) {
    console.log
  }
}

// Resetando Jogo
function reset(){
  contador = 0;
  cartasMesa = [];
  cartasMaoJogador = [];
  todasCartas = [];
  primeiraMao.className = "p-3";
  primeiraMao.innerHTML = "";
  segundaMao.className = "p-3";
  segundaMao.innerHTML = "";
  mesa1.className = "p-3";
  mesa1.innerHTML = "";
  mesa2.className = "p-3";
  mesa2.innerHTML = "";
  mesa3.className = "p-3";
  mesa3.innerHTML = "";
  mesa4.className = "p-3";
  mesa4.innerHTML = "";
  mesa5.className = "p-3";
  mesa5.innerHTML = "";
}
