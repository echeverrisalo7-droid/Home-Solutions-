// El botón flotante de WhatsApp ahora es un enlace directo (sin JS necesario).

(function(){
    galeriaImgs.forEach(function(img){
      img.addEventListener('click', function(){ abrir(img); });
    });
    closeBtn.addEventListener('click', cerrar);
    lightbox.addEventListener('click', function(e){
      if(e.target === lightbox){ cerrar(); }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ cerrar(); }
    });
  })();