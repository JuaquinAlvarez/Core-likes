document.addEventListener('DOMContentLoaded', function() {
    const botonLike1 = document.getElementById('like1');
    const botonLike2 = document.getElementById('like2');
    const botonLike3 = document.getElementById('like3');
  
    const contadorLikes1 = document.querySelector('.co1 h5');
    const contadorLikes2 = document.querySelector('.co2 h5');
    const contadorLikes3 = document.querySelector('.co3 h5');

    let likes1 = 0;
    let likes2 = 0;
    let likes3 = 0;
  
    function aumentarLikes(boton, contador) {
      boton.addEventListener('click', function() {
        if (contador === contadorLikes1) {
          likes1++;
          contadorLikes1.textContent = likes1 === 1 ? '1 like(s)' : likes1 + ' like(s)';
        } else if (contador === contadorLikes2) {
          likes2++;
          contadorLikes2.textContent = likes2 === 1 ? '1 like(s)' : likes2 + ' like(s)';
        } else if (contador === contadorLikes3) {
          likes3++;
          contadorLikes3.textContent = likes3 === 1 ? '1 like(s)' : likes3 + ' like(s)';
        }
      });
    }
  
    aumentarLikes(botonLike1, contadorLikes1);
    aumentarLikes(botonLike2, contadorLikes2);
    aumentarLikes(botonLike3, contadorLikes3);
  });