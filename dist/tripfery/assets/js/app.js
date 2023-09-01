(function () {
  /*-------------------------------------
    Preloader And Animation
    -------------------------------------*/
  $(window).on("load", function () {
    const delay = 1000;
    // Preloader
    $("#preloader").delay(delay).fadeOut();

    // AOS
    var aosAnimation = function () {
      AOS.init({
        easing: "ease",
        once: true,
        disable: "mobile",
      });
    };
    if ($("#preloader")) {
      setTimeout(() => {
        aosAnimation();
        $(".line").addClass("draw-arrow");
      }, delay);
    } else {
      aosAnimation();
    }
  });

  //Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // sticky header
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $("header.sticky-header").removeClass("affix");
      $(".place-holder").css("padding-top", "0");
    } else {
      $("header.sticky-header").addClass("affix");
      $(".place-holder").css("padding-top", "92px");
    }
  });

  /*-------------------------------------
  Intersection Observer
  -------------------------------------*/
if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active-animation");
              observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: "0px 0px -100px 0px"
  });
  document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
  });
  } else {
      document.querySelectorAll('.has-animation').forEach(block => {
          block.classList.remove('has-animation')
      });
  }


  /*-------------------------------------
  Calender
  -------------------------------------*/
  $(".selector").flatpickr({
    dateFormat: "d-m-Y",
    disableMobile: "true",
  });

  /*-------------------------------------
  Card
  -------------------------------------*/
  const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
        panel.addEventListener("mouseover", () => {
            removeActiveClasses();
            panel.classList.add("active");
        });
    });
    function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
    }


  /*=====================================
  //	Jquery Serch Box
  ===================================*/
  $('a[href="#template-search"]').on("click", function (event) {
    event.preventDefault();
    let target = $("#template-search");
    target.addClass("open");
    setTimeout(function () {
      target.find("input").focus();
    }, 600);
    return false;
  });

  $("#template-search, #template-search button.close").on(
    "click keyup",
    function (event) {
      if (
        event.target === this ||
        event.target.className === "close" ||
        event.keyCode === 27
      ) {
        $(this).removeClass("open");
      }
    }
  );


  /*-------------------------------------
  Thumb Slider
  -------------------------------------*/
  var largeSwiper = new Swiper(".largeSwiperThumb", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  var largeSwiper = new Swiper(".largeSwiper", {
    spaceBetween: 24,
    grabCursor: true,
    thumbs: {
      swiper: largeSwiper,
    },
  });

  /*-------------------------------------
  Dropdown Filter
  -------------------------------------*/
  $(".filter-area-trigger").on("click", function () {
    $(".filter-area-trigger").toggleClass("active");
    $(".wide-filter-area").toggleClass("filter-area-block");
  });

  /*-------------------------------------
  Nice Select
  -------------------------------------*/
  $(".select-dropdown").niceSelect();


  /*-------------------------------------
  Testimonial One
  -------------------------------------*/
  let testimonialOneSwiper = new Swiper(".testimonialOneSwiper", {
    loop: true,
    slidesPerView: 1,
    // grabCursor: true,
    speed: 1000,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonialNav .swiper-button-next",
      prevEl: ".testimonialNav .swiper-button-prev",
    },
  });
  /*-------------------------------------
  Testimonial Two
  -------------------------------------*/
  let testimonialTwoSwiper = new Swiper(".testimonialTwoSwiper", {
    // loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    pagination: {
      el: ".testimonialTwoPagiantion.swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  /*-------------------------------------
  Testimonial Two
  -------------------------------------*/
  let testimonialTwoSwiperWithBg = new Swiper(".testimonialTwoSwiperWithBg", {
    loop: true,
    speed: 500,
    autoplay: true,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  /*-------------------------------------
  Destination Slider
  -------------------------------------*/
  let destionationSlider = new Swiper(".destionationSlider", {
    loop: true,
    slidesPerView: 5,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 30,
    navigation: {
      nextEl: ".topDestinationNav .swiper-button-next",
      prevEl: ".topDestinationNav .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
/*-------------------------------------
  Masonry
  -------------------------------------*/

  $(".masonry-items").masonry({
    itemSelector: ".masonry-item",
    columnWidth: ".masonry-item",
  });

  /*-------------------------------------
  Listing Filter
  -------------------------------------*/
  var $grid = $(".cardContainer").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      // options...
      itemSelector: ".card-item",
      layoutMode: "fitRows",
      filter: ".hotel",
    });
  });

  /*-------------------------------------
  Filter Button
  -------------------------------------*/
  $(".listing-filter-btns").on("click", "button", function () {
    $(".listing-filter-btns button").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  /*-------------------------------------
  Filter Button For Hotel
  -------------------------------------*/
  $(".hotel-filter-btns").on("click", "button", function () {
    $(".hotel-filter-btns button").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $hotelGrid.isotope({ filter: filterValue });
  });

  /*-------------------------------------
  Listing Filter
  -------------------------------------*/
  var $hotelGrid = $(".hotelCardContainer").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $hotelGrid.isotope({
      // options...
      itemSelector: ".card-item",
      layoutMode: "fitRows",
      // filter: "*",
    });
  });
    

  /*===================================
   // Section background image 
  ====================================*/
  imageFunction();

  function imageFunction() {
    $("[data-bg-image]").each(function () {
      let img = $(this).data("bg-image");
      $(this).css({
        backgroundImage: "url(" + img + ")",
      });
    });
  }

  /*-------------------------------------
  Magnific Popup
  -------------------------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*-------------------------------------
  Data List
  -------------------------------------*/
  $("[data-list-hover]").hover(function () {
    var t = $(this).attr("data-list-hover");
    $("[data-list-img]").removeClass("active"), $('[data-list-img="'.concat(t, '"]')).addClass("active");
})


  /*-------------------------------------
  Popup Gallery
  -------------------------------------*/
  $(".image-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
})();
