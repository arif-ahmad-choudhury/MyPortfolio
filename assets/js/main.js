$(document).ready(function () {
  // Magnific Popup Active
  // $(".project-popup").magnificPopup({
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });

  // Venobox 

  $('.venobox').venobox({
    framewidth : '550px', 
    frameheight: '400px', 
    border     : '10px',   
    bgcolor    : '#ffffff',
    share      : ['facebook', 'twitter','linkedin','download']
  }); 
   // PeopleSay Slider

   $('.text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-img'
  });
  $('.slider-img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.text-slider',
    prevArrow: '.peolpeSay-arrow-left',
    nextArrow: '.peolpeSay-arrow-right',
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true
  });
  // Counter Active
  $(".count").counterUp();

  // // Slick JS
  // $('.testimonials').slick({
  //   arrows: false,
  //   dots: true,
  //   autoplay: true,
  //   loop: true
  // });
});
