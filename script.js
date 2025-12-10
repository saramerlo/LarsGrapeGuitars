// SWIPER home 
document.addEventListener("DOMContentLoaded", function(){
  var swiper = new Swiper(".swiper-home", {
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

// swiper modelli
document.addEventListener("DOMContentLoaded", function(){
  var swiper = new Swiper(".swiper-modelli", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
});

// SWIPER video
document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector('.swiperVideo');

  // evita errori se la swiperVideo non è presente
  if (!swiperEl) return;

  Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      clickable: true,
    },
    // navigation: false → eliminato, così NON crea frecce
    allowTouchMove: true, // assicura che il drag sia abilitato
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    loop: true,
  });

  swiperEl.initialize();
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

// rotate icon
document.addEventListener('DOMContentLoaded', (event) => {
  const link  = document.getElementById('collapse-head');
  const icon = link.querySelector('.rotate-icon');

  link.addEventListener('click', () => {
    icon.classList.toggle('collapsed');
  });
});

// share social

const pageUrl = encodeURIComponent(window.location.href);
// Ottieni il titolo della pagina corrente
const pageTitle = encodeURIComponent(document.title);

document.getElementById('facebook-share').href = 'https://www.facebook.com/sharer.php?u=' + window.location.href;
  document.getElementById('twitter-share').href = 'https://twitter.com/intent/tweet?url=' + window.location.href;
  document.getElementById('linkedin-share').href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href;


  
