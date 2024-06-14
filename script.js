// NEWS SWIPER 
document.addEventListener("DOMContentLoaded", function(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 480px
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
});

//chiudi menù mobile
document.addEventListener("DOMContentLoaded", function () {
  // Aggiungi un gestore di eventi per il clic su tutto il documento
  document.addEventListener("click", function (event) {
      // Verifica se il clic è avvenuto all'interno della navbar
      let isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
      // Verifica se il clic è avvenuto all'interno del menu mobile
      let isClickInsideMenu = document.getElementById('navbarSupportedContent').contains(event.target);
      // Se il clic è avvenuto al di fuori della navbar e del menu mobile, chiudi il menu
      if (!isClickInsideNavbar && !isClickInsideMenu) {
          document.getElementById('navbarSupportedContent').classList.remove('show');
      }
  });
});

// btn backto top nascosto
document.getElementById('toTop').style.display = 'none';
// comparsa btn backto top
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 400) {
        document.getElementById('toTop').style.display = 'inline';
    } else {
        document.getElementById('toTop').style.display = 'none';
    }
});
