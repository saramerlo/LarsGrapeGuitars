document.addEventListener("DOMContentLoaded", () => {
  // Helper: esiste elemento?
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* =========================
     SWIPER HOME
  ========================== */
  if ($(".swiper-home")) {
    const swiperHome = new Swiper(".swiper-home", {
      slidesPerView: 2,
      pagination: {
        el: ".swiper-home .swiper-pagination", // più specifico
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
      },
    });
  }

  /* =========================
     SWIPER MODELLI
  ========================== */
  if ($(".swiper-modelli")) {
    // Se hai più swiper in pagina e vuoi frecce diverse per ciascuna,
    // bisogna cambiare selettori (qui restano globali come nel tuo codice).
    const swiperModelli = new Swiper(".swiper-modelli", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* =========================
     SWIPER VIDEO (web component)
     Nota: questo sembra essere <swiper-container class="swiperVideo">
  ========================== */
  const swiperVideoEl = $(".swiperVideo");
  if (swiperVideoEl && typeof swiperVideoEl.initialize === "function") {
    Object.assign(swiperVideoEl, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: { clickable: true },
      allowTouchMove: true,
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 16 },
      },
      loop: true,
    });

    // Evita doppia inizializzazione se lo script viene caricato due volte
    if (!swiperVideoEl.swiper) {
      swiperVideoEl.initialize();
    }
  }

  /* =========================
     CHIUDI MENU MOBILE (Bootstrap)
  ========================== */
  const navbar = $(".navbar");
  const menuMobile = $("#navbarSupportedContent");

  if (navbar && menuMobile) {
    document.addEventListener("click", (event) => {
      const isClickInsideNavbar = navbar.contains(event.target);
      const isClickInsideMenu = menuMobile.contains(event.target);

      if (!isClickInsideNavbar && !isClickInsideMenu) {
        menuMobile.classList.remove("show");
      }
    });
  }

  /* =========================
     BACK TO TOP
  ========================== */
  const toTop = $("#toTop");
  if (toTop) {
    toTop.style.display = "none";

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      toTop.style.display = scrollPosition > 400 ? "inline" : "none";
    });
  }

  /* =========================
     SHARE SOCIAL
  ========================== */
  const fb = $("#facebook-share");
  const tw = $("#twitter-share");
  const ln = $("#linkedin-share");

  if (fb || tw || ln) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    if (fb) fb.href = `https://www.facebook.com/sharer.php?u=${url}`;
    if (tw) tw.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    if (ln) ln.href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
  }

  /* =========================
     SWIPER PRODUCT + CAROUSEL MODAL
  ========================== */
  const swiperProductEl = $(".swiper-product");
  if (swiperProductEl) {
    const swiperProduct = new Swiper(".swiper-product", {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-product .swiper-pagination", // specifico
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 7, spaceBetween: 10 },
      },
    });

    const carouselElement = $("#galleryCarousel");
    if (carouselElement && window.bootstrap?.Carousel) {
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(
        carouselElement,
        { interval: false, ride: false }
      );

      // Click su thumb => vai allo slide giusto
      // (Delegation: funziona anche se swiper rigenera gli slide)
      swiperProductEl.addEventListener("click", (e) => {
        const img = e.target.closest(".swiper-slide img");
        if (!img) return;

        const slides = $$(".swiper-product .swiper-slide img");
        const index = slides.indexOf(img);
        if (index >= 0) carouselInstance.to(index);
      });
    } else {
      // niente errore bloccante: semplicemente non collega al carousel
      // console.warn("Carousel #galleryCarousel o Bootstrap Carousel non disponibile");
    }
  }
});


  // lazy load
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = document.querySelectorAll("img.lazy");

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     let img = entry.target;
//                     img.src = img.dataset.src;
//                     img.removeAttribute("data-src");
//                     img.classList.remove("lazy");
//                     lazyImageObserver.unobserve(img);
//                 }
//             });
//         });

//         lazyImages.forEach(img => lazyImageObserver.observe(img));
//     } else {
//         // Fallback per browser più vecchi
//         lazyImages.forEach(img => img.src = img.dataset.src);
//     }
// });
