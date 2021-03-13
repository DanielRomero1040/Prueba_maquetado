
//Popup Galeria

let abrirGaleria1 = document.getElementById('abrir-popup-1'),
    abrirGaleria2 = document.getElementById('abrir-popup-2'),
    abrirGaleria3 = document.getElementById('abrir-popup-3'),
    abrirGaleria4 = document.getElementById('abrir-popup-4'),
    abrirGaleria5 = document.getElementById('abrir-popup-5'),
    abrirGaleria6 = document.getElementById('abrir-popup-6'),

    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    imagen = document.getElementById('imagen'),

    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    btnFotoSiguiente = document.getElementById('btn-siguiente'),
    btnFotoAnterior = document.getElementById('btn-anterior');

abrirGaleria1.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_1','imagen')
    popup.classList.add('active');
});
abrirGaleria2.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_2','imagen')
    popup.classList.add('active');
});
abrirGaleria3.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_3','imagen')
    popup.classList.add('active');
});
abrirGaleria4.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_4','imagen')
    popup.classList.add('active');
});
abrirGaleria5.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_5','imagen')
    popup.classList.add('active');
});
abrirGaleria6.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_6','imagen')
    popup.classList.add('active');
});




btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    imagen.classList.remove('sprite-galeria_1','sprite-galeria_2','sprite-galeria_3','sprite-galeria_4','sprite-galeria_5','sprite-galeria_6','imagen')
});

btnFotoSiguiente.addEventListener('click',function(){
    if (imagen.classList.contains('sprite-galeria_1') == true) {        
        imagen.classList.replace('sprite-galeria_1','sprite-galeria_2');
     } 
     else if (imagen.classList.contains('sprite-galeria_2') == true) {
        imagen.classList.replace('sprite-galeria_2','sprite-galeria_3');        
     }
     else if (imagen.classList.contains('sprite-galeria_3') == true) {
        imagen.classList.replace('sprite-galeria_3','sprite-galeria_4');        
     }
     else if (imagen.classList.contains('sprite-galeria_4') == true) {
        imagen.classList.replace('sprite-galeria_4','sprite-galeria_5');        
     }
     else if (imagen.classList.contains('sprite-galeria_5') == true) {
        imagen.classList.replace('sprite-galeria_5','sprite-galeria_6');        
     }
     else if (imagen.classList.contains('sprite-galeria_6') == true) {
        imagen.classList.replace('sprite-galeria_6','sprite-galeria_1');        
     }
     
    
})

btnFotoAnterior.addEventListener('click',function(){
    if (imagen.classList.contains('sprite-galeria_1') == true) {        
        imagen.classList.replace('sprite-galeria_1','sprite-galeria_6');
     } 
     else if (imagen.classList.contains('sprite-galeria_2') == true) {
        imagen.classList.replace('sprite-galeria_2','sprite-galeria_1');        
     }
     else if (imagen.classList.contains('sprite-galeria_3') == true) {
        imagen.classList.replace('sprite-galeria_3','sprite-galeria_2');        
     }
     else if (imagen.classList.contains('sprite-galeria_4') == true) {
        imagen.classList.replace('sprite-galeria_4','sprite-galeria_3');        
     }
     else if (imagen.classList.contains('sprite-galeria_5') == true) {
        imagen.classList.replace('sprite-galeria_5','sprite-galeria_4');        
     }
     else if (imagen.classList.contains('sprite-galeria_6') == true) {
        imagen.classList.replace('sprite-galeria_6','sprite-galeria_5');        
     }
     
    
})