    // WOW JS 
    new WOW().init();

    // Counter JS
	$('.counter').counterUp({
		delay: 10,
        time: 1000
    });
    
    // Magnific Images
	$('.click-link').magnificPopup(
		{
			type:'image',
			gallery:{
				enabled:true
			}
		}
	);
		// typed Text
	var typed = new Typed('.ityped', {
		strings: [
			' I Am  Web Developer',
			 'I Am Front End Developer',
			 'I Am Web Designer',
			 'I Am Graphic Designer',
			 'I Am Logo Designer',
			 'I Am Freelancer'
			],
			typeSpeed:60,	
			backSpeed:60,	
			cursorChar: "",			
			loop: true
	  });
    
    // Magnific Video
	$('.video-link').magnificPopup(
		{
			type : 'iframe'
		}
	);
    
    // Responsive Menu
	$('#menu').slicknav();

	// One Page Js
	$('#menu').onePageNav();

	// Blog Slider Js
	$(".owl-carousel").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

	


	jQuery(window).load(function () {

		/* Sticky Header
		============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 20) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});

		/* Preloader Active
		============================*/
		$(".preloader").fadeOut()
	});
