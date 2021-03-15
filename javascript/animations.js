
//Popup Galeria

        //Variables
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

        //Acciones al seleccionar una imagen
abrirGaleria1.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_1_full','imagen')
    popup.classList.add('active');
});
abrirGaleria2.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_2_full','imagen')
    popup.classList.add('active');
});
abrirGaleria3.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_3_full','imagen')
    popup.classList.add('active');
});
abrirGaleria4.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_4_full','imagen')
    popup.classList.add('active');
});
abrirGaleria5.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_5_full','imagen')
    popup.classList.add('active');
});
abrirGaleria6.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('sprite-galeria_6_full','imagen')
    popup.classList.add('active');
});



        // Botones del popup
btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    imagen.classList.remove('sprite-galeria_1_full','sprite-galeria_2_full','sprite-galeria_3_full','sprite-galeria_4_full','sprite-galeria_5_full','sprite-galeria_6_full','imagen')
});

btnFotoSiguiente.addEventListener('click',function(){
    if (imagen.classList.contains('sprite-galeria_1_full') == true) {        
        imagen.classList.replace('sprite-galeria_1_full','sprite-galeria_2_full');
     } 
     else if (imagen.classList.contains('sprite-galeria_2_full') == true) {
        imagen.classList.replace('sprite-galeria_2_full','sprite-galeria_3_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_3_full') == true) {
        imagen.classList.replace('sprite-galeria_3_full','sprite-galeria_4_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_4_full') == true) {
        imagen.classList.replace('sprite-galeria_4_full','sprite-galeria_5_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_5_full') == true) {
        imagen.classList.replace('sprite-galeria_5_full','sprite-galeria_6_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_6_full') == true) {
        imagen.classList.replace('sprite-galeria_6_full','sprite-galeria_1_full');        
     }    
    
})

btnFotoAnterior.addEventListener('click',function(){
    if (imagen.classList.contains('sprite-galeria_1_full') == true) {        
        imagen.classList.replace('sprite-galeria_1_full','sprite-galeria_6_full');
     } 
     else if (imagen.classList.contains('sprite-galeria_2_full') == true) {
        imagen.classList.replace('sprite-galeria_2_full','sprite-galeria_1_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_3_full') == true) {
        imagen.classList.replace('sprite-galeria_3_full','sprite-galeria_2_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_4_full') == true) {
        imagen.classList.replace('sprite-galeria_4_full','sprite-galeria_3_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_5_full') == true) {
        imagen.classList.replace('sprite-galeria_5_full','sprite-galeria_4_full');        
     }
     else if (imagen.classList.contains('sprite-galeria_6_full') == true) {
        imagen.classList.replace('sprite-galeria_6_full','sprite-galeria_5_full');        
     }   
    
})

        // Iniciar la libreria wow
new WOW().init();
        // Iniciar el SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});

        //Captcha


        function Captcha(){
         var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
           'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
               '0','1','2','3','4','5','6','7','8','9');
         var i;
         for (i=0;i<6;i++){
             var a = alpha[Math.floor(Math.random() * alpha.length)];
             var b = alpha[Math.floor(Math.random() * alpha.length)];
             var c = alpha[Math.floor(Math.random() * alpha.length)];
             var d = alpha[Math.floor(Math.random() * alpha.length)];
             var e = alpha[Math.floor(Math.random() * alpha.length)];
             var f = alpha[Math.floor(Math.random() * alpha.length)];
             var g = alpha[Math.floor(Math.random() * alpha.length)];
                          }
             var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
             document.getElementById("mainCaptcha").innerHTML = code
           document.getElementById("mainCaptcha").value = code
           }
    function ValidCaptcha(){
         var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
         var string2 =         removeSpaces(document.getElementById('txtInput').value);
         if (string1 == string2){
                return true;
         }else{        
              return false;
              }
    }
    function removeSpaces(string){
         return string.split(' ').join('');
    }
