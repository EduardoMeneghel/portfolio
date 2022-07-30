   function relogio(){
    var data=new Date();
    var hora=data.getHours();
    var minuto=data.getMinutes();
    var segundo=data.getSeconds();
    let letHoras = document.getElementById("horas");
    let letMinutos = document.getElementById("minutos");
    let letSegundos = document.getElementById("segundos");
    var rotatehoras = hora;
    var rotateminutos = minuto;
    var rotatesegundos = segundo;
    
    if(hora <= 9){
      hora="0"+ hora;
    }
    if(minuto <= 9){
      minuto="0"+minuto;
    }
    if(segundo <= 9){
      segundo="0"+segundo;
    }
    if(rotatehoras => 12){
      rotatehoras = rotatehoras - 12;
    }

    rotatehoras = rotatehoras * 30;
    rotateminutos = rotateminutos * 6;
    rotatesegundos = rotatesegundos * 6;

    console.log(rotatehoras, rotateminutos, rotatesegundos)
    
    var horas=hora + ":" + minuto + ":" + segundo;

    document.getElementById("relogio").value=horas;
    document.getElementById("console").value= rotatehoras +" " + rotateminutos  +" " + rotatesegundos;
    letHoras.style.transform = 'rotate('+rotatehoras+'deg)';
    letMinutos.style.transform = 'rotate('+rotateminutos+'deg)';
    letSegundos.style.transform = 'rotate('+rotatesegundos+'deg)';
}

var timer=setInterval(relogio,1000);
