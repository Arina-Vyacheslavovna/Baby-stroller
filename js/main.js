$(document).ready(function(){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
    });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".slide-one").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 5000,
  autoplayHoverPause: true,
  slideTransition: "linear",
  items: 2,
  nav: false,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    }
  },
});

$(".slide-two").owlCarousel({
  loop: true,
  autoplay: true,
  // autoplayTimeout: 2000,
  autoplaySpeed: 10000,
  autoplayHoverPause: true,
  slideTransition: "linear",
  items: 2,
  nav: false,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    }
  },
});