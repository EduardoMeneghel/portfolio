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