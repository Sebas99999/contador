let caja = document.querySelector('.caja');

let contador = 0;

document.addEventListener('click', e =>{
        if(e.target.matches('.aumentar')){
                contador++;
                caja.innerHTML = contador;
        }else if(e.target.matches('.disminuir')){
                 contador--;
                 caja.innerHTML = contador;
        }else if(e.target.matches('.resetear')){
                contador=0;
                caja.innerHTML = contador;
        }
        if( contador < 0) {
                caja.style.color = 'red';
        }else if( contador > 0) {
                caja.style.color = 'green';
        }  else if( contador === 0){
                caja.style.color = 'blue';
        }
        
})


      




        
   


    


    
 






        
      






