(function(){
    var lightbox    = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var closeBtn    = document.getElementById('lightboxClose');
    var galeriaImgs = document.querySelectorAll('.experiencia__grid .exp img');

    function abrir(img){
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('lightbox--activo');
      document.body.style.overflow = 'hidden';
    }
    function cerrar(){
      lightbox.classList.remove('lightbox--activo');
      document.body.style.overflow = '';
    }

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
