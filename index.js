const navigation = document.querySelector('nav');

 window.addEventListener('scroll', () => {

     if(window.scrollY > 30){
         navigation.classList.add('anim-nav');
     } else {
         navigation.classList.remove('anim-nav');
     }

 })


 jQuery(function(){  //bouton retour en haut
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
 


