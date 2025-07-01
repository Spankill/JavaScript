const inputElement = document.querySelector('.input');

const bodyElement = document.querySelector('body');

inputElement.checked = localStorage;


function actualizarBody(){
      if(inputElement.checked){
            bodyElement.style.background = 'black';
      }
      else{
            bodyElement.style.background = 'white';
      }
}

inputElement.addEventListener('input', () => {
      actualizarBody();
      actualizaLocalStorage();
});

function actualizaLocalStorage(){
      localStorage.setItem('modoOscuro', JSON.stringify(inputElement.checked));
}